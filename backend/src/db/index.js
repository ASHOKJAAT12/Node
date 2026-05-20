import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

const connection = async () => {
    try{
        const mongoconnection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connection successful!`);
        return mongoconnection;
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}
export default connection