import mongoose from "mongoose";

const teamschemas = new mongoose.Schema({
    teamImage: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    personName:{type:String,required:true},
    personWork:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())}
})
const Team = mongoose.model("Team",teamschemas)
export default Team