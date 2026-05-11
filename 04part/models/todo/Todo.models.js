import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
},
{
    timestamps: true
});
export const Todo = mongoose.model("Todo",todoSchema);