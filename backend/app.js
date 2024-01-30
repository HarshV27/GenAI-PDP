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

// import all routes
// const homeRoute = require('./routes/homeRoute');

// router middleware
// app.use('/api/v1', homeRoute);


export default app