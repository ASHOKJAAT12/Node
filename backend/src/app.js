import express from 'express';
import cors from 'cros';
import cookieparser from 'cookie-parser';

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))

app.use(cookieparser());
app.use(express.static("public"));
app.use(express.json({
    limit: "16kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));



export { app };