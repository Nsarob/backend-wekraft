
import Didyou from "../model/didyou.js";
import errormessage from "../utiles/errormessage.js";
import sucessmessage from "../utiles/successmessage.js";
import User from "../model/user.js";
import didyouemail from "../utiles/didyoumessage.js"

class didyouController{
    static async sendDidyou(req,res){
        try {
            const didyou=await Didyou.create(req.body)
            if(!didyou){
               return errormessage(res,401,'no idea from didyou found')
           }else{
            const user=await User.find()
            user.map((users)=>{
                didyouemail(users,didyou)
            })
               return sucessmessage(res,201,'successfuly post',didyou)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async getdidyou(req,res){
        try {
            const didyou = await Didyou.find()
            if(!didyou){
                return errormessage(res,401,'no idea from didyou found')
            }else{
                return sucessmessage(res,201,'successfuly retrived',didyou)
             }
         } catch (error) {
             return errormessage(res,500,`error is ${error}`)
         }
    }

    static async deleteonedidyou(req,res){
        const id=req.params.id
        try {
            const didyou = await Didyou.findByIdAndDelete(id)
            if(!didyou){
                return errormessage(res,401,'no idea from didyou found')
            }else{
                return sucessmessage(res,201,'successfuly deleted')
             }
         } catch (error) {
             return errormessage(res,500,`error is ${error}`)
         }
    }

}
export default didyouController