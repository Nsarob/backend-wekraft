import express from 'express';
import Reply from '../model/reply.js';
import Contact from '../model/contact.js';
import sucessmessage from '../utiles/successmessage.js';
import errormessage from '../utiles/errormessage.js';
import replyemail from '../utiles/replymessage.js';


class ReplyController{
    static async reply(req,res){
        try {
            const{replyMessage}=req.body
            const contID=req.params.id
            const contact=await Contact.findById(contID)
            if(!contact){
                console.log("not found")
            }
            else{
                const replycontact=await Reply.create({replyMessage})
                const contacts=await Contact.findByIdAndUpdate({_id:contID},{$push:{reply:replycontact}},{new:true})
                if(!contacts){
                    return errormessage(res,401,`Reply not done`)
                }
                else{
                    replyemail(contact,replycontact)
                    return sucessmessage(res,201,`you are reply ${contact.email}`,contacts)
                }
            }
        } catch (error) {
            return errormessage(res,500,`Error!! ${error}`)
        }
    }
}

export default ReplyController