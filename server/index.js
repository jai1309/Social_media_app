import dotenv from "dotenv"
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import { clerkMiddleware } from '@clerk/express'
import userRouter from './routes/userRoutes.js';


dotenv.config({
    path: './.env'
})

const app= express();
app.use(express.json());
app.use(cors());
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use(clerkMiddleware())

app.use('/api/user',userRouter)

app.get('/',(req, res)=>{
    return res.send('Server Is Running')
})


const PORT = process.env.PORT || 4000

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`The process is running at port ${PORT}`)
    })
    
    
})
.catch((err)=>{
    console.log(`Database connection error. The error is : ${err.message}`);
    
})