import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { userRouter } from "./routes/users.js";
import { mountainRouter } from "./routes/mountains.js";

const app = express();

// GLOBAL CONFIGURATION
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);
// console.log(process.env);

// CONNECTION ERROR/SUCCESS - OPTIONAL BUT HELPFUL
// DEFINE CALLBACK FUNCTIONS FRO VARIOUS EVENTS
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ")); // mongoURI
db.on("close", () => console.log("mongo disconnected"));

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// AUTHENTICATION ROUTE
app.use("/auth", userRouter);
app.use("/mountain", mountainRouter);

app.listen(3001, () => console.log("listening"));
