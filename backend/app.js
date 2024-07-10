import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials: true,
  })
);

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(res,req)=>{
  res.json({
    success:true,
    message: "Welcome to the chat app",
  })
})




app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
