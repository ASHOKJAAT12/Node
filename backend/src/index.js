import connection from './db/index.js';

import express from 'express';
const app = express();

connection()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is live on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb connection failed",err);
})