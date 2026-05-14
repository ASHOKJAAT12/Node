import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

const connection = async () => {
    try{
        const mongoconnection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`mongodb connection successfully ${mongoconnection}`);
        
    } catch (err) {
        console.log("mongodb connection failed",err);
        process.exit(1);
    }
}
export default connection