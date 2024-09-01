import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({limit: "19kb"}));
app.use(express.urlencoded({extended: true, limit: "19kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//Import Route

import userRouter from "./routes/user.router.js";

//route declaration

app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register
export {app};
