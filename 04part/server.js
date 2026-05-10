import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get('/',(req,res)=>{
    res.send("hello world!");
})
app.get('/signup',(req,res)=>{
    res.send("hello sign up page!");
})
app.listen(PORT,()=>{
    console.log(`the server is live on PORT ${PORT}`);
})
