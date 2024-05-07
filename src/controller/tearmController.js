import cloudinary from 'cloudinary';
import Team from '../model/tearm.js';
import errormessage from '../utiles/errormessage.js'; 
import sucessmessage from '../utiles/successmessage.js';

class OurTearm {
    static async tearms(req, res) {
        try {
            if (!req.file) {
                return errormessage(res, 401, `Please choose an image`);
            }
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'tearm'
            });
            const tearm = await Team.create({
                teamImage: {
                    public_id: result.public_id,
                    url: result.secure_url,
                },
                personName: req.body.personName,
                personWork: req.body.personWork, 
            });
            if (tearm) {
                return sucessmessage(res, 201, `${req.body.personName} posted successfully`, tearm);
            } else {
                return errormessage(res, 401, `Posted failed`);
            }
        } catch (error) {
            console.error('Error:', error);
            return errormessage(res, 500, `Error: ${error.message}`);
        }
    }

    static async getTeam(req,res){
        const team = await Team.find()
        if(!team){
            return errormessage(res,401,`no team found`)
        }else{
            return sucessmessage(res,200,`all team retrived`,team)
        }
    }
    static async delete(req,res){
        const id=req.params.id
        try {
            const product = await Team.findByIdAndDelete(id)
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,`successfuly product on this id ${id} deleted`)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }
}

export default OurTearm;
