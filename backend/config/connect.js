import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import colors from 'colors'




export const connectDB = async()=>{


    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Data Base Has Been Connected on Host ${process.env.MONGO_URL.bgMagenta}`)


}