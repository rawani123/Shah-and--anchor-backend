import dotenv from "dotenv"
import connectDB from "./config/db.js";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import sponsorRoutes from "./routes/sponsor.routes.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/api/users",userRoutes)
app.use('/api/sponsor',sponsorRoutes)

app.listen(PORT, () => {
    console.log("Server running on port 5000")
})


connectDB();

