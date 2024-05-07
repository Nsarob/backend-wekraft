import errormessage from "../utiles/errormessage.js"
import User from "../model/user.js"

class DtataChequer{

    static userRegisterIsEmpty=(req,res,next)=>{
        const {firstname,lastname,email,password,confirmpassword}=req.body
        const {fullname,schoolname,phonenumber,course,message,province,}=req.body

        if(firstname==""){
            return errormessage(res,401,`please provide your firstName`)
        }
        else if(lastname==""){
            return errormessage(res,401,`please provide yuor lastName`)
        }
        else if(email==""){
            return errormessage(res,401,`please provide yuor email`)
        }
        else if(password==""){  
            return errormessage(res,401,`please provide yuor password`)
        }else if(confirmpassword==""){
            return errormessage(res,401,`please provide yuor confirm password`)
        }
        else if(fullname==""){
            return errormessage(res,401,`please provide yuor fullname`)
        }
        else if(schoolname==""){
            return errormessage(res,401,`please provide yuor schoolname`)
        }
        else if(phonenumber==""){  
            return errormessage(res,401,`please provide yuor phonenumber`)
        }else if(course==""){
            return errormessage(res,401,`please provide yuor course`)
        }
        else if(message==""){  
            return errormessage(res,401,`please provide yuor message`)
        }else if(province==""){
            return errormessage(res,401,`please provide yuor province`)
        }
        else{
            return next()
        }
    }

    static videoPostIsEmpty=(req,res,next)=>{
        const {video,videoTitle,videoDescription,youtubeLink}=req.body

        if(video==""){
            return errormessage(res,401,`please provide your video`)
        }
        else if(videoTitle==""){
            return errormessage(res,401,`please provide yuor videoTitle`)
        }
        else if(videoDescription==""){
            return errormessage(res,401,`please provide yuor videoDescriptionemail`)
        }
        else if(youtubeLink==""){  
            return errormessage(res,401,`please provide yuor youtubeLink`)
        }
        else{
            return next()
        }
    }

    static async emailExist(req,res,next){
        const email=req.body.email;
        const user = await User.findOne({email})
        if(user){
            return errormessage(res,401,`user allready exist`)
        }
        else{
            return next()
        }
    }

}
export default DtataChequer