import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
// });

cloudinary.config({ 
    cloud_name: 'djz9awgmp', 
    api_key: '975777824967498', 
    api_secret: 'zzU1R6CzfXXNV8D2xj3gEOvpRfk' 
  });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        console.log('localFilePath',localFilePath)
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log('cloudinar response',response)
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        console.log('error----------  ',error)
        return null;
    }
}



export {uploadOnCloudinary}