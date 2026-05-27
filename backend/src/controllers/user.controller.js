import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js'
const registerUser = asyncHandler(async (req, res)=> {
    //take input from front end
    //validation not empty
    //check the username and email is already exist
    //check for image , check for avatar
    //uplaod on cloudinary
    //create user object
    //remove password and refersetoken field from response
    //check user creation 
    //return response

    const {userName, fullName, email, coverImage, avatar, password} = req.body;

    if (
        [userName, fullName, email, coverImage, avatar, password].some(
            (field)=> field?.trim() === ""
        )
    ) {
        throw new ApiError(400,"All Feilds re Required!");
    }
    
})

export { registerUser } ;