import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String,
            requried: true,
        },
        thumbnail: {
            type: String,
            requried: true
        },
        title: {
            type: String,
            requried: true
        },
        description: {
            type: String,
            requried: true
        },
        duration: {
            type: Number,
            required: true
        },
        like: {
            type: Number,
            requried: true,
            default: 0
        },
        like: {
            type: Number,
            requried: true,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }
);

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video",videoSchema);