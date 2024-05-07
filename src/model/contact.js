
import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({

    fullname:{type:String,required:true},
    email:{type:String,required:true},
    schoolname:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    course:{type:String,required:true},
    message:{type:String,required:true},
    province:{type:String,enum:["Eastern province","Western province","Sourthern province","Northern province","Kigali city"]},
    sendAt:{
        type:Date,
        default:new Date(Date.now())
    },
    reply:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reply"
    }]


})
contactSchema.pre(/^find/,function(next){
    this.populate({
        path:"reply",
        select:""
    })
    next()
})
const Contact =mongoose.model("Contact",contactSchema)
export default Contact