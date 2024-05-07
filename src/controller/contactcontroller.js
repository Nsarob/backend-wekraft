import Contact from "../model/contact.js"
import errormessage from "../utiles/errormessage.js"
import sucessmessage from "../utiles/successmessage.js"
import contactEmail from "../utiles/contactmessage.js"
import User from "../model/user.js"


class contactController{
    static async sendmessage(req,res){
        try {
            const contact = await Contact.create(req.body)
            if(!contact){
                return errormessage(res,401,'message not sent')
            }else{ 
                contactEmail(contact)
                return sucessmessage(res,201,'message successfuly sent',contact)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async getcontact(req,res){
         try {
            const contact=await Contact.find()
            if(!contact){
                return errormessage(res,401,'no message from contact found')
            }else{
                return sucessmessage(res,200,'message successfuly retrived',contact)
            }
         } catch (error) {
              return errormessage(res,500,`error is ${error}`)
         }
    }
     
    static async deletecontact(req,res){
        try {
           const contact=await Contact.deleteMany()
           if(!contact){
               return errormessage(res,401,'no message from contact found')
           }else{
               return sucessmessage(res,200,'message successfuly deleted')
           }
        } catch (error) {
             return errormessage(res,500,`error is ${error}`)
        }
   }

   static async getOnecontact(req,res){
      const id=req.params.id
    try {
       const contact=await Contact.findById(id)
       if(!contact){
           return errormessage(res,401,'no message from contact found')
       }else{
           return sucessmessage(res,200,'message successfuly retrived',contact)
       }
    } catch (error) {
         return errormessage(res,500,`error is ${error}`)
    }
   }


   static async deleteOnecontact(req,res){
    const id=req.params.id
  try {
     const contact=await Contact.findByIdAndDelete(id)
     if(!contact){
         return errormessage(res,401,'no message from contact found')
     }else{
         return sucessmessage(res,200,'message successfuly deleted')
     }
  } catch (error) {
       return errormessage(res,500,`error is ${error}`)
  }
 }



}
export default contactController