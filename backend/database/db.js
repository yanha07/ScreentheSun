import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection established");
    }catch(err){
        console.log("Error in connection", err);
    }
}

export default Connection;