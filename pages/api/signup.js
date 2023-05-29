import connectDb from "../../Database/dbConnection"
import User from "../../Database/models/userSchema"


const bcrypt = require("bcryptjs")

export default async function handler(req,res){

    await connectDb();
  

   //


    if(req.method == "POST"){

        console.log(req.body.body)
     const {username,email,password} = req.body.body
     const hashedPassword = await bcrypt.hash(password,10)

     console.log(hashedPassword)

     console.log(username)

    

    if(!username || !email || !password){
        return res.status(422).json({message:" Unprocesseable entities available"})
    }

    else{
        try{
                const existEmail = await User.findOne({email:email}) || await User.findOne({username:username}) 
                if(existEmail){
                    return res.status(400).json({message:"Email or Username already exist"})
                }

                else{

                    const newPost = {
        username:username,
        email:email,
        password:hashedPassword
    }
    
                    let user
                    user = new User( newPost)

                    let createUser =  await user.save()
                    if(createUser){
                      res.status(201).json({message:"Account created successfully", User:newPost})
                    }
                  else{
                    res.status(400).json({message:"User not created"})
                  }
                }
        }

        catch(err){
                res.status(500).json({message:"Server Error"})
        }
    }

}

else{
    res.status(404).json({message:"request method is invalid for this resources"})
}
}