import nodemailer from "nodemailer";

const contactEmail=async(userinfo)=>{
    let transport=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        },
    });
    let mailoptions={
        from:userinfo.email,
        to:"kagabojaphet22@getMaxListeners.com",
        subject:`User Contact You`,
        html:`<h2>This</h2><p><b>${userinfo.email}</b></p><p>sent a message</p><br>
        <p>${userinfo.message}</p>`
    };
    transport.sendMail(mailoptions,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    });
}
export default contactEmail