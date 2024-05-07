
import Product from "../model/product.js"
import errormessage from "../utiles/errormessage.js"
import cloudinary from '../utiles/cloud.js'
import sucessmessage from "../utiles/successmessage.js"
import productemail from "../utiles/productemail.js"
import User from "../model/user.js"

class productController{
    static async postProduct(req, res) {
        try {
         
          if (!req.file) {
            return errormessage(res, 400, 'Please upload a product image.');
          }
    
          
          const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'product',
          });
          const product = await Product.create({
            productImage: {
              public_id: result.public_id,
              url: result.secure_url,
            },
            productName: req.body.productName,
            quantityAvailable: req.body.quantityAvailable,
            serialNumber: req.body.serialNumber,
            productPrice: req.body.productPrice,
          });
          if (!product) {
            return errormessage(res, 500, 'Failed to create product.');
          }
          const user=await User.find()
          user.map((users)=>{
            productemail(users,product)
          })
          return sucessmessage(res, 201, 'Product successfully posted', product);
        } catch (error) {
          console.error('Error:', error);
          return errormessage(res, 500, `Error: ${error.message}`);
        }
      }

    

    static async getproduct(req,res){
        try {
            const product = await Product.find()
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,"successfuly product retrived",product)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deleteproduct(req,res){
        try {
            const product = await Product.deleteMany()
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,"successfuly product deleted")
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async getoneproduct(req,res){
        const id=req.params.id
        try {
            const product = await Product.findById(id)
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,`successfuly product on this id ${id} retrived`,product)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deleteoneproduct(req,res){
        const id=req.params.id
        try {
            const product = await Product.findByIdAndDelete(id)
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,`successfuly product on this id ${id} deleted`)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }
    static async updateProduct(req, res) {
        const id = req.params.id;
        try {
            const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
            if (!product) {
                return errormessage(res, 404, "Product not found");
            } else {
                return sucessmessage(res, 200, "Product updated successfully", product);
            }
        } catch (error) {
            return errormessage(res, 500, `Error updating product: ${error}`);
        }
    }
    

}
export default productController