import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectionDB = async () => {
    try {
        const mongodbconection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        //mongodb connection successfull
        console.log(`mongodb connection ${mongodbconection.Connection.prototype}`);
    } catch (error) {
        console.log(`mongodb connection faild!`);
        process.exit(1);
    }
}

export default connectionDB;