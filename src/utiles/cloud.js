import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key:  process.env.cloudinary_api_key, 
  api_secret: process.env.cloudinary_api_secret
});

console.log("CLoudinary: ",{ 
  cloud_name: process.env.cloud_name, 
  api_key:  process.env.cloudinary_api_key, 
  api_secret: process.env.cloudinary_api_secret
})

export default cloudinary
