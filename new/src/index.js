import express from 'express'; 
import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
await connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
});
