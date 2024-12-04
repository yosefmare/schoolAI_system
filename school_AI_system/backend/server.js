import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./config/connectDB.js";
import teachersRoutes from "./routes/teachersRoutes.js";


const app = express()


// Load environment variables from .env file
dotenv.config()

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/teachers", teachersRoutes )

// Connect to MongoDB
connectDB()

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));