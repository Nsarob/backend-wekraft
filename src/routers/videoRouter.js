// routes/videoRoutes.js
import express from "express";
import videocontrollers from "../controller/videoController.js";
import VerifyAccess from "../middlewares/velifyaccess.js";
import DtataChequer from "../middlewares/datachecker.js";
import multer from "multer";
import upload from "../validation/upload.js";
// import cloudinaryService from '../utiles/cloud.js'; 


const router = express.Router();

const uploadMiddleware = multer({ dest: 'uploads/' });

router.post("/post",VerifyAccess("admin"),uploadMiddleware.single("video"), DtataChequer.videoPostIsEmpty,videocontrollers.postVideo);

router.get("/get", videocontrollers.getvideo);
router.get("/get/:id", videocontrollers.getonevideo);
router.delete("/delete",VerifyAccess("admin"), videocontrollers.deletevideo);
router.delete("/delete/:id",VerifyAccess("admin"), videocontrollers.deleteonevideo);

export default router;
