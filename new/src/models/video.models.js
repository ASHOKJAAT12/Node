import mongoose, { trusted } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'
const videoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        videoFile: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        view: {
            type: Number,
            required: true,
            default: 0
        },
        like: {
            type: Number,
            required: true,
            default: 0
        },
        coment: {
            type: String
        },
        isPublish: {
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
)

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video",videoSchema);