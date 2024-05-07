import express from "express";
import oderController from "../controller/orderController.js";
import VerifyAccess from "../middlewares/velifyaccess.js";
const router=express.Router()
router.post("/:id",oderController.orderingProduct)
router.delete("/",VerifyAccess("admin"),oderController.deleteOder)
router.get("/",oderController.getoder)
router.get("/:id",oderController.getOneOder)
router.delete("/:id",VerifyAccess("admin"),oderController.deleteOne)
export default router



