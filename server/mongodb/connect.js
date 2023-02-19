import mongoose from "mongoose";

const connectDB = (url) =>{
mongoose.set('strictQuery', true);

mongoose.connect(url).then(()=>{
    console.log("mongo db connected");
}).catch((err)=>{console.log(" mongo db connect error ", err, " url : ", url)})
}

export default connectDB;