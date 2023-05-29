"use client"
import connectDb from "../../Database/dbConnection"
import Blog from "../../Database/models/userSchema"
import validateToken from "../../Database/validateToken"

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

export default async function handler( req,res) {

    console.log(req)
    await connectDb();
    let blogs;
    let posts;
    let token;

    const tokenSecret = "qwertyuiopasdfgh12345"
    let authUser = req.headers.Authorization || req.headers.authorization
    if(!authUser){
        return  res.status(400).json({message:"User is not authorized to access this resources"})
      }
  
      if(authUser && authUser.startsWith("Bearer")){
          token = authUser.split(" ")[1]
          jwt.verify(token,tokenSecret,(err,decoded)=>{
              if(err){ 
  return res.status(400).json({message:" accessToken expired"})
              }
              console.log(decoded)
          })
  
   
   } 
  
    if(req.method == "GET"){
        
      try{
        posts = await Blog.find()
  
        if(posts.length == 0){
          return res.status(404).json({message:"Details not found"})
  
        }
  
        if(!posts){
          return res.status(500).json({message:"Server Error"})
        }
        return res.status(200).json({posts:posts})
  }
  catch(err){
  
  
  }
  
    }
  
    else{
      return;
    }
  
    
  }
  