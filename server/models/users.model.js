import query from "../config/database.config";
import bcrypt from "bcryptjs";

export async function register(username, password) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = ?", [username]);
        if (user) {
            return { error: "Username is already in use", success: false };
        }
        let hash = await bcrypt.hash(password, 10);
        await query("INSERT INTO user (username , password) VALUES ( ? , ?)", [
            username,
            hash,
        ]);
        return { data: "succesfully registered", success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function login(username, password) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = ?", [username]);
        if (!user) {
            return { error: "invalid Username or password", success: false };
        }
        const match = bcrypt.compare(password, user.password);
        if (!match) return { error: "Invalid username or Password", success: false };
        return { data: { id: user.id, username: user.username }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}
