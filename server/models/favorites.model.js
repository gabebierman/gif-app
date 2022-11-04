import { Schema } from "mongoose";

const favoriteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    gif_id: {
        type: String,
        required: true,
    },
});

export default favoriteSchema;
