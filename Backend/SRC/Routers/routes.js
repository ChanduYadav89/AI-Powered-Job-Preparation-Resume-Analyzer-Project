import express from 'express'
import { userRegister } from "../Controller/user.controller.js";

const authRoute = express.Router()

authRoute.use("/register", userRegister)


export default authRoute