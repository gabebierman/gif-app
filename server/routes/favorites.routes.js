import express from "express";
import validateGifData from "../middleware/validateGifData";
import { addFavorite, getByUser, removeFavorite } from "../models/favorites.model";
const router = express.Router();

router.put("/add", validateGifData, async (req, res) => {
    const resObj = await addFavorite(req.body);
    return res.send(resObj);
});

router.delete("/delete/:gif_id/:user_id", async (req, res) => {
    const { gif_id, user_id } = req.params;
    const resObj = await removeFavorite(user_id, gif_id);
    return res.send(resObj);
});

router.get("/:user_id", async (req, res) => {
    const resObj = await getByUser(req.params.user_id);
    return res.send(resObj);
});

export default router;
