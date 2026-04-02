import express from 'express'
import { userRegister, userLogin, userLogout, getMeController } from "../Controller/user.controller.js";
import authMiddleware from '../Middleware/auth.middleware.js';

const authRoute = express.Router()

authRoute.post("/register", userRegister)

authRoute.post("/login", userLogin)

authRoute.get("/logout", userLogout)

authRoute.get("/get-me", authMiddleware, getMeController);


export default authRoute