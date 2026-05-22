import connection from './db/index.js';
import { app } from './app.js';
import "dotenv/config";

connection()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is live on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    });