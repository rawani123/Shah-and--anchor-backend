import dotenv from "dotenv"
import connectDB from "./config/db.js";
import express from "express";


dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.log("Server running on port 5000")
})


connectDB();

