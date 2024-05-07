import express from 'express';
import OurTearm from '../controller/tearmController.js';
import upload from '../validation/uploadProduct.js';


const router = express.Router()

router.post("/",upload.single('teamImage'),OurTearm.tearms)
router.get("/get",OurTearm.getTeam)
router.delete("/:id",OurTearm.delete)
export default router