import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectionDB from "../src/config/db.js";
const app = express();

// basic config
app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);
app.use(morgan("dev"));

import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 10 * 1000, // 1 minutes
  max: 3, // Max 3 requests per IP
  message: "Too many requests, try again later.",
});

app.use(limiter);
dotenv.config({
  path: "../.env",
});
connectionDB();

// routes
app.get("/", (req, res) => {
  res.send("hi");
});
import userRoute from "../src/routes/auth.routes.js";
app.use("/api/v1/auth", userRoute);
export default app;
