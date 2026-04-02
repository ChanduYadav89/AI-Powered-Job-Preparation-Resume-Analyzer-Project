import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
import BlacklistModel from "../Models/user.Blacklist.js";

export async function authMiddleware(req,res,next) {
    
    const token = req.cookies.token;

    if(!token){
        return res.status(400).json({
            message : "Token not provided"
        })
    }

    const isTokenBlacklisted = await BlacklistModel.findOne({token})

    if(isTokenBlacklisted){
        return res.status(400).json({
            message : "Token are expired"
        })
    }

    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token.",
    });
  }
}

export default authMiddleware
    
