import nodemailer from "nodemailer"

const videoemail=async(userInfo,videoInfo)=>{
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
        subject:`New Video`,
        html:`<p>Dear</p><p><b>${userInfo.firstName}</b></p><p>Wekraft Upload New Video<br><br>
        <b> ${videoInfo.video}</b></p>`
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
export default videoemail