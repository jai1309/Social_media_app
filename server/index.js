import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import connectDB from './configs/db.js';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"


dotenv.config({
    path: './.env'
})

const app= express();
app.use(express.json());
app.use(cors());
app.use("/api/inngest", serve({ client: inngest, functions }));

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