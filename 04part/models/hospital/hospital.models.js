import mongoose from "mongoose";

const addresSchema = new mongoose.Schema({
    country: {
        type: String,
        requried: true
    },
    state: {
        type: String,
        requried: true
    },
    city: {
        type: String,
        requried: true
    },
    pincode: {
        type: String,
        requried: true
    },
    contactNo: {
        type: Number,
        requried: true
    }
});
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    addres: {
        type: [addresSchema]
    },
    specialised: {
        type: String,
        requried: true
    }
},{timestamps: true});

export {
    addresSchema
};
export const Hospital = mongoose.model("Hospital",hospitalSchema);