import express from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';

const app = express();

app.use(cors(
    {
        origin: "http://localhost:3000/",
        credentials: true
    }
));
app.use(cookieparser());
app.use(express.urlencoded(
    {
        limit: "16kb",
        extended: true
    }
));
app.use(express.json(
    {
        limit: "16kb"
    }
))
app.use(express.static("public"));

export { app };