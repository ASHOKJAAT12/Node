import mongoose from "mongoose";
async function connectDB() {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/mydb");
        console.log(`Connected to MongoDB at ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB;