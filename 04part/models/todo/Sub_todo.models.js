import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        requried: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    parentTodo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
        required: true   
    }
},
{
    timestamps: true
}
);
export const SubTodo = mongoose.model("SubTodo",subTodoSchema);