
import contactController from "../controller/contactcontroller.js";
import express from "express"
import DtataChequer from "../middlewares/datachecker.js";
import validator from "../middlewares/validation.js";
import VerifyAccess from "../middlewares/velifyaccess.js";


const router = express.Router()
router.post("/post",DtataChequer.userRegisterIsEmpty,validator.contactAccountRule()
,validator.inputvalidator,contactController.sendmessage)

router.get("/get",VerifyAccess("admin"),contactController.getcontact)
router.delete("/delete",VerifyAccess("admin"),contactController.deletecontact)
router.get("/get/:id",contactController.getOnecontact)
router.delete("/delete/:id",VerifyAccess("admin"),contactController.deleteOnecontact)

export default router