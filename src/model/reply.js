import mongoose from "mongoose";

const replySchema=new mongoose.Schema({
    replyMessage:{
        type:String,
        required:true
    },
    replyAt:{
        type:Date,
        default:Date.now()
    }
})
const Reply=mongoose.model("Reply",replySchema)
export default Reply