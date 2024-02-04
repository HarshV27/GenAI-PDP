import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  medicineName: {
    type: String,
    required: [true, "Please Provide the name of the medicine"],
    trim: true,
    maxlength: [120, "Medicine name should be less than 120 char"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the price of medicine"],
    maxlength: [5, "Medicine price should be less than 5 digits"],
  },
  companyName: {
    type: String,
    required: [true, "Please add company name for medicine"],
  },


  images: [
    {
      type: String,
        require: true
    }

  ],


  medicineInfo: [
    {
      language: {
        type: String,
        required: true,
      },
      info: [{ question: { type: String }, answer: { type: String } }],
    },
  ],
  expiryDate: {
    type: String,
    required: true
  },
});



export const Medicine = mongoose.model("MedicineSchema", medicineSchema)
