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


//   images: [
//     {
//       id: {
//         type: String,
//         required: true,
//       },
//       secure_url: {
//         type: String,
//         required: true,
//       },
//     },
//   ],

  
//   medicineInfo: [
//     {
//       language: {
//         type: String,
//         required: true,
//       },
//       info: [{ question: { type: String }, answer: { type: String } }],
//     },
//   ],
//   expiryDate: {
//     type: Date,
//     required:true
//   },
});
export const Medicine = mongoose.model("MedicineSchema", medicineSchema)

/*
{
medicineNames : [ { lang, name } ]
images : [ {private_key,secure_url} ]
companyName : String
price : Integer
discount : Integer
medicineInfo : [ {lang,info : [  {question,answer} ]}   ]
expiryDate : Date
}

MedicineID
MedicineName
Audio-of-Name
Images- Array
Company Name
Price
Discount
MedicineInfo - Array of Info

_______________________________
Info
    - id
    - Question
               - Stored in 8 Languages
        - Eng/Hin Audio
    - Answer 
        - Stored in 8 Languages
        - Eng/Hin Audio



*/
