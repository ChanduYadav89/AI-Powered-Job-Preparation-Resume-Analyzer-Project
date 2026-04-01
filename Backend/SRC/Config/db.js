import mongoose from "mongoose";
import dns from "dns"
dns.setServers(["1.1.1.1", "8.8.8.8"])
import dotenv from 'dotenv';
dotenv.config()

export async function connectDB(){
    try {

        await mongoose.connect(process.env.MONGODB_URI)

        console.log("MongoDb is Connected Successfully🚀👌")
        
    } catch (error) {

        console.error(error)
        
    }
}