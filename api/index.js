import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; //environment variable
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config(); //initialize dotenv

//database connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express(); //initialize express application
app.use(express.json());

//start the server on port 3000, making it ready to accept requests
app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

//Sets up the routes to handle different endpoints. In this case, it routes all /api/user requests to the handlers defined in userRoutes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  })
})