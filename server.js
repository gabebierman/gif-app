import express from "express";
const app = esxpress();
import userRouter from "./server/routes/user.routes";
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname, "/build"));
app.use("/api/users", userRouter);
