
import mongoose from "mongoose";


const didyouschemas = new mongoose.Schema({

    Title:{type:String,required:true},
    Description:{type:String,required:true},
    sendAt:{type:Date,default:new Date(Date.now())}

})
const Didyou=mongoose.model("Didyou",didyouschemas)
export default Didyou