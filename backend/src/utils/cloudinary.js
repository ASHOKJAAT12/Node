import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localfilepath) => {
    try {
            if (!localfilepath) {
                console.log("Cloudinary upload skipped: no local file path provided");
                return null
            }
            const response = await cloudinary.uploader.upload(localfilepath,{
                resource_type: "auto"
            })
            //The file is uploade successfully on cloudinary
            
            if (fs.existsSync(localfilepath)) {
                fs.unlinkSync(localfilepath);
            }
            return response;
    } catch ( error ) {
            console.error("Cloudinary upload failed:", error?.message || error);
            if (localfilepath && fs.existsSync(localfilepath)) {
                fs.unlinkSync(localfilepath)
            }
            return null
    }
}

export { uploadOnCloudinary };