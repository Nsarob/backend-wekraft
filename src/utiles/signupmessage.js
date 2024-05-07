import nodemailer from "nodemailer";

const welcomeEmail=async(userinfo)=>{
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
        subject:` Sign-up Well Done`,
        html:`<p> Dear, <b>${userinfo.firstname}</b></p><br><br>
        <p> Your Sign-up Successfuly Done!!!!! <br><br>${userinfo.firstname} Thank you`
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
export default welcomeEmail