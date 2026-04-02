import UserModel from "../Models/user.model.js";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config()


// Register the users

export async function userRegister(req,res) {
   try {

     const {username , email , password} = req.body

    if(!username || !email || !password){
        return res.status(400).json({
            message : "All fields are required to fill"
        })
    }

        const verifyEmail = await UserModel.findOne({email})

        if(verifyEmail){
            return res.status(400).json({
                message : "User is already exist for this email"
            })
        }

        const hashPassword = await argon2.hash(password)

        const User = await UserModel.create({
            username,
            email,
            password : hashPassword
        })

        const Token = jwt.sign({
            id : User._id,
        },process.env.JWT_SECRET,{
            expiresIn : "1d",
        })

        res.cookie("token", Token,{
            httpOnly : true,
            secure : true,
            samesite : "strict",

        })

        
        return res.status(200).json({
            message : "user is created Successfully",
            Username : User.username,
            email : User.email
        })
    
   } catch (error) {
         console.err(err)
   }
    
}

// user Login Api

export async function userLogin(req,res){
    const {email , password} = req.body

    const verifyUser = await UserModel.findOne({email})

    if(!verifyUser){
        return res.status(400).json({
            message : "Invalid Email"
        })
    }

    const verifyPass = await argon2.verify(verifyUser.password , password);


    if(!verifyPass){
        return res.status(400).json({
            message : "Invalid Password"
        })
    }

    const Token = jwt.sign({
        id : verifyUser._id
    },process.env.JWT_SECRET,{
        expiresIn : "1d"
    })

    res.cookie("token", Token,{
        httpOnly : true,
        secure : true,
        samesite : "strict",
    })

    return res.status(200).json({
        message : "User successfully Login",
        id : verifyUser._id,
        email : verifyUser.email,
        Username : verifyUser.username
    })
}



