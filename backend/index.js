import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors  from 'cors';

import { databaseconnection } from './config/database.js';
import userRoutes from './routes/userRoutes.js';  // Fixed import
import uvRoutes from './routes/uvRoutes.js'; // Import UV routes
// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



// Connect to database
databaseconnection();

// Define Routes
app.use('/api/v1/userRoutes', userRoutes);
app.use('/api/v1/uv-alerts', uvRoutes); // Use UV alerts route

app.post('', (req, res) => {
    res.send('Done');
});

// Home route
app.get('/', (req, res) => {
    res.send('ScreentheSun API is running');
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
