import express from "express";
import validateGifData from "../middleware/validateGifData";
import auth from "../middleware/auth.middleware";
import { addFavorite, getByUser, removeFavorite } from "../models/favorites.model";
const router = express.Router();

router.put("/add", auth, validateGifData, async (req, res) => {
    const gif = { ...req.body, user_id: req.user.id };
    const resObj = await addFavorite(gif);
    return res.send(resObj);
});

router.delete("/delete/:gif_id", auth, async (req, res) => {
    const { gif_id } = req.params;
    const resObj = await removeFavorite(req.user.id, gif_id);
    return res.send(resObj);
});

router.get("/", auth, async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;
