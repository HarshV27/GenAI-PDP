import { Medicine } from "../models/medicineModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const addMedicine = asyncHandler(async (req, res) => {
  const { medicineName, price, companyName,expiryDate,medicineInfo } = req.body;

  const totalImages = req.files?.length;

  console.log('totalImages', totalImages)
  // console.log('reqfiles', req.files)
  const imagesUrl = [];

  for (let index = 0; index <totalImages; index++) {
    const currentImageLocalPath = req.files[index]?.path
    const response  = await uploadOnCloudinary(currentImageLocalPath);
    console.log('response',response)
    imagesUrl.push(response.url);
  }

  const medicine = await Medicine.create({
    medicineName,
    price,
    companyName,
    expiryDate,
    medicineInfo,
    images : imagesUrl
  });
  res.status(200).json({
    success:true,
    medicine
  });
});

const getAllMedicine = asyncHandler(async (req, res) => {
  const allMedicine = await Medicine.find({});
  res.status(200).json({
    success:true,
    allMedicine
  });
});

export { addMedicine,getAllMedicine };
