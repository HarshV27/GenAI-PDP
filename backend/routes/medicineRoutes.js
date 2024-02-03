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

// router.route("/login").post(loginUser)

// //secured routes
// router.route("/logout").post(verifyJWT,  logoutUser)
// router.route("/refresh-token").post(refreshAccessToken)
// router.route("/change-password").post(verifyJWT, changeCurrentPassword)
// router.route("/current-user").get(verifyJWT, getCurrentUser)
// router.route("/update-account").patch(verifyJWT, updateAccountDetails)

// router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
// router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

// router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
// router.route("/history").get(verifyJWT, getWatchHistory)

export default router