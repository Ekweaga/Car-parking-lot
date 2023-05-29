import mongoose from 'mongoose'

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}
const mongooseDb = require("mongoose")


const dbConnectionDetails ="mongodb://0.0.0.0:27017/Panto"

 const connectDb = async ()=>{
 await  mongooseDb.connect(dbConnectionDetails).then(()=>console.log("Conected")).catch((err)=>console.log("err",err))
 
}

export default connectDb;

