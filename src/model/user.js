import mongoose from "mongoose";

const userschemas = new mongoose.Schema({

    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    dateofBirth:{type:String},
    confirmpassword:{type:String,required:true},
    role:{type:String,enum:["user","admin"],default:"user"},
    signedAt:{type:Date,default:new Date(Date.now())}

})
const User = mongoose.model("User",userschemas)
export default User