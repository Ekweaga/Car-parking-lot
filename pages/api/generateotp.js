"use client"
import otpGenerator from "otp-generator"
import connectDb from "../../Database/dbConnection"
import User from "../../Database/models/userSchema"
import emailjs from '@emailjs/browser';
import nodemailer from "nodemailer"
import validateToken from "../../Database/validateToken";

export default async function handler(req,res){
  
    await connectDb();

    


    const {email} = req.body.body
    const tokenSecret = "qwertyuiopasdfgh12345"
    let authUser = req.headers.Authorization || req.headers.authorization
   

   if(req.method == "POST"){
    const user = await User.findOne({email:email}) 
    if(!user){
        res.status(404).json({message:`${email} do not exist`})
    }

    else{
         
        let token =  otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
        console.log(token)
        

         User.updateMany({email:email},{ $set: { otp:token} }).then((res)=>{
            console.log(res)
         }).catch((err)=>{
            console.log(err)
         })

         var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hikay133@gmail.com',
              pass: 'cedric2@'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: "hikay133@gmail.com",
            subject: 'Password Recovery',
            text: `Your Token \n ${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    return res.status(200).json({message:"OTP sent"})
    }
   }

   

}