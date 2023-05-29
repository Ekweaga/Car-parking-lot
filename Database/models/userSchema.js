import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
    username:{
        type:String,
        unique:[true,"Please provide unique username"]
      

    }
,

    email:{
        type:String,
        unique:[true,"Email must be unique"]
        
        
    },
password:{
        type:String,
      
        
    }
   
   
})



export default mongoose.models.User || mongoose.model("User",UserSchema)