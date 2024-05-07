
import errormessage from "../utiles/errormessage.js";
import jwt from "jsonwebtoken";

const VerifyAccess = (passRole)=>{

  return (req,res,next)=>{
    const token = req.headers["auth-token"]
    if(!token){
      return errormessage(res,401,`no token provided`)
    }else{
     try {
      const verifyToken = jwt.verify(token,process.env.SCRET_KEY,{expiresIn:"2d"})
      req.user=verifyToken.user
      if(passRole !== verifyToken.user.role){
        return errormessage(res,401,`please you have not access`)
      }else{
        return next()
      }
     } catch (error) {
      if ((error.name = "JsonWebTokenError"))
          return errormessage(res, 401, "Invalid Token or Expired Token");
     }
    }
  }

}
export default VerifyAccess