import nodemailer from "nodemailer";

const replyemail=async(userinfo,replyinfo)=>{
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
        from:process.env.EMAIL,
        to:userinfo.email,
        subject:` Reply Wekraft`,
        html:`<p> Dear, <b>${userinfo.email}</b></p><br><br>
        <p>Wekreft send Feedback to you <b>${replyinfo.replyMessage}</p></b>`
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
export default replyemail