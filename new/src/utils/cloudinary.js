import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
)

const uploadeCloudinary = async (localFilePath)=> {
    try {
        const response = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto"
            }
        )
        //successful uplaode on cloudinary
        console.log(`successful uplaode on cloudinary ${response.url}`)
        return response;
    } catch (error) {
        console.log(`faild to upload on cloudinary!`);
        fs.unlinkSync(localFilePath);
        return null;
    }
}
