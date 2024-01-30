const express = require('express');
require('dotenv').config();
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


module.exports = app;