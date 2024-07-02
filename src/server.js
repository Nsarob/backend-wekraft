import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routers/index.js";
import path from 'path';
import fs from 'fs'; // Required for file system operations

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Debugging statements to check if environment variables are loaded
console.log("Current directory:", __dirname);
console.log("PORT:", process.env.PORT);
console.log("DATABASE:", process.env.DATABASE);
console.log("SECRET_KEY:", process.env.SECRET_KEY);


const app = express();
const corsOptions = {
  origin: '*', // https://wekraft.org/
  optionsSuccessStatus: 200, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'auth-token'],
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Pre-flight

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const currentModuleDirectory = path.dirname(new URL(import.meta.url).pathname);
const uploadsDirectory = path.join(currentModuleDirectory, '../uploads');
app.use('/videos', express.static(uploadsDirectory));


app.use("/API", router);

const port = process.env.PORT;
const dbUri = process.env.DATABASE;


// debug
if (!dbUri) {
    console.error("DATABASE environment variable is not defined");
    process.exit(1); // Exit with failure
  }

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to the database.");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
