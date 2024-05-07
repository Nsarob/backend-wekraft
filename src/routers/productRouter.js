 import express from "express"
import productController from "../controller/productcontroller.js"
import upload from "../validation/uploadProduct.js"
import VerifyAccess from "../middlewares/velifyaccess.js"


 const router = express.Router()
 router.post("/post",VerifyAccess("admin") ,upload.single('productImage'), productController.postProduct)
  router.get("/get",productController.getproduct)
  router.get("/get/:id",productController.getoneproduct)
  router.delete("/delete",VerifyAccess("admin"),productController.deleteproduct)
  router.delete("/delete/:id",VerifyAccess("admin"),productController.deleteoneproduct)
  router.put("/updated/:id",productController.updateProduct)
 export default router