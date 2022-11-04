import query from "../config/database.config";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { getByUser } from "./favorites.model";

export async function register(username, password) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = $1", [username]);
        if (user) {
            return { error: "Username is already in use", success: false };
        }
        let hash = await bcrypt.hash(password, 10);
        const uuid = uuidv4();
        await query("INSERT INTO user (username , password , uuid) VALUES ( $1 , $2 , $3)", [
            username,
            hash,
            uuid,
        ]);
        return { data: "succesfully registered", success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function login(username, password) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = $1", [username]);
        if (!user) {
            return { error: "invalid Username or password", success: false };
        }
        const match = bcrypt.compare(password, user.password);
        if (!match) return { error: "Invalid username or Password", success: false };
        //get by userID and if not an error , send back
        const { data, error } = await getByUser(user.id);
        if (error) {
            console.error(err);
            return { error: "Something went wrong 🤷‍♂️", success: false };
        }
        return {
            data: { user: { id: user.id, username: user.username }, favorites: data },
            success: true,
        };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}
