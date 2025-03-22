import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export function databaseconnection() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error) => {
            console.log('Error connecting to the database');
            console.log(error);
        });
}
