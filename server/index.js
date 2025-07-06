import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

//Middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("API is working fine");
});

// app.listen(PORT, () => {
//   console.log(`Server is listening on PORT: ${PORT}`);
// });

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB. Server not started.");
  }
};

startServer();
