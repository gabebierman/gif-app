import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import favoriteSchema from "./favorites.model";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 4,
        maxLength: 20,
        required: true,
        unique: [true, "Username already taken"],
    },
    password: { type: String, minLength: 8, maxLength: 20, required: true },
    faorites: [favoriteSchema],
    uuid: { type: String, default: () => uuidv4() },
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await this.hash(this.password);
    }
    return next();
});

userSchema.methods.hash = async function (password) {
    return await bcrypt.hash(password, 10);
};

userSchema.methods.verify = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export default model("User", userSchema);
