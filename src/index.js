
import dotenv from "dotenv";
import connectDB from "./db/index.js";

import { app } from "./app.js";

dotenv.config({      
    path: './.env'
})
// database connection
connectDB().then(() => {
    app.listen(process.env.PORT || 8000 , () => {
       console.log(`server is running at port:${process.env.PORT}`);
    }) 
})
.catch((err) => {
    console.log('Mongo db is connection failed ',err);
})