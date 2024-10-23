import express from 'express';
import cors from 'cors'
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// routes import 
import { Program } from './Models/program.model.js';


//routes decalaration
app.use("/api/v1/Program",Program);

// app.get("/api/v1/users",(req,res) => {
//     res.send('server is ready ')
// });

//http://localhost:3000/api/v1/users/register

export {app}