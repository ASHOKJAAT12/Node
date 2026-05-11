import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        requrie: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    parentTodo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
        require: true   
    }
},
{
    timestamps: true
}
);
export const SubTodo = mongoose.model("SubTodo",subTodoSchema);