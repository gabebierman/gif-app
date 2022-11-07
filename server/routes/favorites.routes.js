import express from "express";
import validateGifData from "../middleware/validateGifData";
import { addFavorite, getByUser, removeFavorite } from "../models/favorites.model";
const router = express.Router();

//TODO implement middlware // add user_id to the gif before sending it to the function
router.put("/add", validateGifData, async (req, res) => {
    const gif = req.body;
    const resObj = await addFavorite(gif);
    return res.send(resObj);
});

//TODO implement middlware // remove user_id route parameter and pull user_id from req
router.delete("/delete/:gif_id/:user_id", async (req, res) => {
    const { gif_id, user_id } = req.params;
    const resObj = await removeFavorite(user_id, gif_id);
    return res.send(resObj);
});

//TODO implement middlware // remove user_id route parameter and pull user_id from req
router.get("/:user_id", async (req, res) => {
    const resObj = await getByUser(req.params.user_id);
    return res.send(resObj);
});

export default router;
