import mongoose from "mongoose";
import { addresSchema } from "./hospital.models.js";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        enum: ['A','B','O'],
        required: true
    },
    addres: {
        type: [addresSchema]
    },
    bimari: {
        type: String,
        required: true
    }
},{timestamps: true});

export const Patient = mongoose.model("Patient",patientSchema);