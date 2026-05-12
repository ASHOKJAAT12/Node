import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subtodo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
    }
},
{
    timestamps: true
});
export const Todo = mongoose.model("Todo",todoSchema);