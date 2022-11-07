import express from "express";
import { login, register } from "../models/users.model";
import validateData from "../middleware/validateUserData.middleware";
const router = express.Router();

router.put("/register", validateData, async (req, res) => {
    const { username, password } = req.body;
    const resObj = await register(username, password);
    return res.send(resObj);
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const resObj = await login(username, password);
    return res.send(resObj);
});

//TODO add a logout route to delete the cookie

export default router;
