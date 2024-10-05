import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import status from "express-status-monitor";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(status());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRoutes from "./routes/userRoutes.js";

app.use("/userauth/api", userRoutes);

export { app };
