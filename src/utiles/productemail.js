import nodemailer from "nodemailer";

const productemail = async (userInfo,proInfo) => {
    try {
        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: userInfo.email,
            subject: `New Product`,
            html: `<p>Dear ${userInfo.firstname}</p><p>Do you know? Wekraft Upload New Product</p><br><p><b>${proInfo.productName}</b></p>
            <br>${proInfo.productImage}`
        };

        let info = await transport.sendMail(mailOptions);
        console.log("Email sent: ", info);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};

export default productemail;
