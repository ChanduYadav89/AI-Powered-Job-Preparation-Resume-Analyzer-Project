import express from 'express'
import { userRegister, userLogin, userLogout} from "../Controller/user.controller.js";

const authRoute = express.Router()

authRoute.post("/register", userRegister)

authRoute.post("/login", userLogin)

authRoute.get("/logout", userLogout)


export default authRoute