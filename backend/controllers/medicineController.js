import { Medicine } from "../models/medicineModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const addMedicine = asyncHandler(async (req, res) => {
  const { medicineName, price, companyName } = req.body;
  const medicine = await Medicine.create({
    medicineName,
    price,
    companyName,
  });
  res.status(200).json(medicine);
});

export { addMedicine };
