import { Router } from "express";
import {
    addMedicine,
    getAllMedicine
} from "../controllers/medicineController.js";
import { upload } from "../middleware/multerMiddleware.js";
const router = Router()

router.route("/add-medicine").post(
    upload.array('images'), addMedicine)

router.route("/get-medicine").get(
    getAllMedicine)

export default router