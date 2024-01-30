import express from 'express';
import dotenv from "dotenv"
dotenv.config({
  path: './.env'
})
const app = express();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// health check
app.use('/api/v1/health-check',(req,res)=>{
    res.status(200).json({message:'success'})
})

import medicineRouter from './routes/medicineRoutes.js'



//routes declaration
app.use("/api/v1/medicine", medicineRouter)


export default app