import mongoose from 'mongoose';

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

export const User = mongoose.model("User",userSchema);