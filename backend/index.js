import app from './app.js'
import connectWithDb from './config/db.js';
import dotenv from "dotenv"
dotenv.config({
  path: './.env'
})


import cloudinary from 'cloudinary';

// connect with db
connectWithDb();

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});