
import express from "express"
import didyouController from "../controller/didyoucontriller.js"
import VerifyAccess from "../middlewares/velifyaccess.js"


const router = express.Router()

router.post("/post",VerifyAccess("admin"),didyouController.sendDidyou)
router.get("/get",didyouController.getdidyou)
router.delete("/delete/:id",VerifyAccess("admin"),didyouController.deleteonedidyou)
export default router