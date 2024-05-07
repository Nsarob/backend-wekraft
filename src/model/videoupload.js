
import mongoose from "mongoose";


const videoSchemas = new mongoose.Schema({

    video: {
            type: String,
            required: true
    },
    videoTitle:{type:String,required:true},
    videoDescription:{type:String,required:true},
    youtubeLink:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())}

})
const Videoupload = mongoose.model("Videoupload",videoSchemas)
export default Videoupload