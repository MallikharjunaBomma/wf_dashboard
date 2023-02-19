import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import projectRoute from "./routes/project.routes.js";
import userRoute from "./routes/user.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/api/v1/users', userRoute);
app.use('/api/v1/projects', projectRoute);
app.get('/', (req,res) => {
    res.send({message:"hello world"});
})

const startServer  = async () => {
    try{
         connectDB(process.env.MONGODB_URL)
        app.listen(port,()=>{
            console.log(`Server started on port http://localhost:${port}`);
        })
    }catch(err){
        console.log("mongo db connect error : ", err);
    }
}

startServer();