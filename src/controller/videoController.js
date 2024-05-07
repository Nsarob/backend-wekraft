import Videoupload from "../model/videoupload.js";
import errormessage from "../utiles/errormessage.js";
import sucessmessage from "../utiles/successmessage.js";
import cloudinary from "../utiles/videos.js";
import videoemail from "../utiles/videoemail.js";
import User from "../model/user.js";

class videocontrollers{

    static async postVideo(req, res) {
        const { video, videoTitle, videoDescription, youtubeLink } = req.body;
      
        try {
          const videos = await Videoupload.create({ video, videoTitle, videoDescription, youtubeLink });
          if (videos) {
            return sucessmessage(res, 201, `Video uploaded successfully`, videos);
          } else {
            return errormessage(res, 401, `Video not uploaded, please try again`);
          }
        } catch (error) {
          try {
            const result = await cloudinary.uploader.upload(req.file.path, {
              folder: 'product',
            });
            const videos = await Videoupload.create({
              video: {
                public_id: result.public_id,
                url: result.secure_url,
              },
              videoDescription: req.body.videoDescription,
              youtubeLink: req.body.youtubeLink,
            });
            if (!videos) {
              return errormessage(res, 500, 'Failed to create product.');
            }
            const users = await User.find();
            users.map((user) => {
              videoemail(user, videos);
            });
            return sucessmessage(res, 201, 'Product successfully posted', videos);
          } catch (error) {
            console.error('Error:', error);
            return errormessage(res, 500, `Error: ${error.message}`);
          }
        }
      }
    
    static async getvideo(req,res){
        try {
            const video = await Videoupload.find()
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,"video successfuly retrived",video)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deletevideo(req,res){
        try {
            const video = await Videoupload.deleteMany()
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,"video successfuly deleted")
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async getonevideo(req,res){
        const id=req.params.id
        try {
            const video = await Videoupload.findById(id)
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,`video successfuly on this id ${id} retrived`,video)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deleteonevideo(req,res){
        const id=req.params.id
        try {
            const video = await Videoupload.findByIdAndDelete(id)
            if(!video){
                return errormessage(res,401,'no video found')
            }else{
                return sucessmessage(res,201,`video successfuly on this id ${id} deleted`)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

}
export default videocontrollers
