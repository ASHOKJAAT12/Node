import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            index: true,
            trim: true
        },
        email: {
            type: String,
            requried: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            requried: true
        },
        coverIamge: {
            type: String,
            required: true
        },
        referseToken: {
            type: String,
            required: true
        },
        watchHistory: [{
            type = mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }]
    },
    {
        timestamps: true
    }
)

userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.models.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            userName: this.userName,
            fullName: this.fullName,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.models.generateReferseToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User",userSchema);