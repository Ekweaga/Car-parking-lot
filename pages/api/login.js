"use client"
import connectDb from "../../Database/dbConnection"
import User from "../../Database/models/userSchema"


const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

export default async function handler(req,res){

    await connectDb();
  

   // creating access token

  


    if(req.method == "POST"){

        console.log(req.body.body)
     const {email,password} = req.body.body
     


    

    if(!email || !password){
        return res.status(422).json({message:"Unprocesseable entities available"})
    }

    else{
        try{
                const user = await User.findOne({email:email}) 
               console.log(user)
            const cmp = await bcrypt.compare(password,user.password)
                if(user){

                    if(user && cmp){
                        const tokenSecret = "qwertyuiopasdfgh12345"
                        const accessToken = jwt.sign({user:{username:user.username, email:user.email,id:user.id}},tokenSecret,{expiresIn:"3m"})
                        console.log(accessToken)
                        res.status(200).json({accessToken:accessToken})
                    }

                    else{
                        return res.status(404).json({message:` ${email} not found`})
                    }
                    
                }

                else{

                    return res.status(404).json({message:`user with ${email} do not exist`})

                }
        }

        catch(err){
                res.status(500).json({message:"Server Error"})
                console.log(err)
        }
    }

}

else{
    res.status(404).json({message:"request method is invalid for this resources"})
}
}