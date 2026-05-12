import mongoose from "mogoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addres: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    }
},{timestamps: true});

export const Doctor = mongoose.model("Doctor",doctorSchema);