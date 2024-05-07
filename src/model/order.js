import mongoose from "mongoose";
const oderSchemas = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    quantity: {
        type: Number,
        required: true
    },
    productname:{
        type:String
    },
    productprice:{
        type:Number
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    shippingAddress:{
        type:String,
        required:true
    },
    totalPrice: {
        type: Number,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    oderAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
oderSchemas.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:""
    })
    next()
})
const Oder=mongoose.model("Oder",oderSchemas)
export default Oder