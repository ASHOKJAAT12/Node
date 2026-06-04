import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { User } from '../models/user.models.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import jwt from 'jsonwebtoken';

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500,"something is wrong when generate access and refresh token.");
    }
}
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

    //take input from front end
    const { username, fullName, email, password } = req.body
    console.log(`email : ${email}\n username: ${username}`)
    //validation - not empty
    if (
        [username, fullName, email, password].some(
            (field)=> field?.trim() === ""
        )
    ) {
        throw new ApiError(400,"All Feilds are Required!");
    }

    //check user already exist
    const userExist = await User.findOne({
        $or: [{username}, {email}]
    })
    // console.log(`userexist: ${userExist}`);
    
    if(userExist) {
        throw new ApiError(209,"UserName and Email Alreaday Exist!");
    }

    //check for avatar , check for coverImage
    const avatarLocalPath = req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;
    
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
    console.log(req.files);

    if (!avatarLocalPath) {
        throw new ApiError(400,"Avatar File Required!");
    }

    //upload on cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400,"avatar file is required");
    }

    //create user object
    const user = await User.create(
        {
            username: username.toLowerCase(),
            fullName,
            password,
            avatar: avatar.url,
            coverImage: coverImage.url || "",
            email
        }
    )

    //remove password and referse token from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500,"Something went wrong while registering the user")
    }
    //return user creation response
    console.log("user create successfully!");
    
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Register Successfully")
    )
})


const loginUser = asyncHandler( async (req, res) => {

    //take username and password fron front end
    //check username in database
    //check password is correct
    //if correct retru reponse

    const { username, password } = req.body || {};

    if ( !username || !password ) {
        throw new ApiError(400,"All Feild Are Requried!");
    }

    const user = await User.findOne({username})

    if (!user) {
        throw new ApiError(404,"this username not found");
    }

    if (user) {
        console.log(`username: ${username}`);
        
    }
    const isPasswordVaild = await user.isPasswordCorrect(password);

    if ( !isPasswordVaild ) {
        throw new ApiError(401,"Wrong password");
    }

    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }
    console.log("user successfully login.");
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(200,{
            user: loggedInUser,refreshToken,accessToken
        },"user successfully login.")
    )
})

const logoutUser = asyncHandler ( async (req, res ) => {
    await User.findByIdAndUpdate( 
        req.user._id,
        {
            $set: {
               refreshToken: undefined 
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.
    status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,{},"User logout successfully.")
    )
})


export { registerUser, loginUser, logoutUser } ;