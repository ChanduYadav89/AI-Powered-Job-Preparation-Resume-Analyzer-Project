import express from 'express'
import { userRegister, userLogin} from "../Controller/user.controller.js";

const authRoute = express.Router()

authRoute.use("/register", userRegister)

authRoute.use("/login", userLogin)


export default authRoute