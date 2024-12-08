import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json()); // Middleware for parsing request body

// Middleware for handling CORS POLICY
app.use(cors());  

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', booksRoute);

// Connect to MongoDB
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        console.log('MongoDB URL:', process.env.MONGODB_URL);
        console.log('Port:', process.env.PORT);

        // Start server only after DB connection
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Database connection error:', error);
    });
