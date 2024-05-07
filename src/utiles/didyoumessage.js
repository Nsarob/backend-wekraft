import nodemailer from "nodemailer"

const didyouemail=async(userInfo,didinfo)=>{
    let transport=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL,
            pass    :process.env.PASSWORD
        },
    });
    let mailOption={
        from:process.env.EMAIL,
        to:userInfo.email,
        subject:`Wekraft`,
        html:`<p>Dear</p><h2>${userInfo.firstname}</h2><br><p>Did know? Wekraft has new Realize update.</p><br>
        <p>${didinfo.Title}</p>`
    }
    transport.sendMail(mailOption,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
}
export default didyouemail