import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import formRouter from './routes/formroute.js';
import { connectDB } from './config/connect.js';
dotenv.config()





const app = express()
// Connect the database
connectDB()
// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())
// Routes
app.use('/api/form',formRouter)

// Server
app.listen(process.env.PORT,console.log(`Server has been started on ${process.env.PORT}`))