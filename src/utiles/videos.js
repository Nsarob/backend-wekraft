import { v2 as cloudinary } from 'cloudinary';

// Initialize Cloudinary with your account credentials
cloudinary.config({
    cloud_name: 'dipawi57c', 
    api_key: '691624192685166', 
    api_secret: 'eIFrUkZaKCMbr8ByyZCtSv4NjxQ'
});

cloudinary.uploader.upload('./uploads', { resource_type: "video" }, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
  

export default cloudinary;