import app from './app.js'
import connectWithDb from './config/db.js';
import dotenv from "dotenv"
dotenv.config({
  path: './.env'
})


import cloudinary from 'cloudinary';

// connect with db
connectWithDb();

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});