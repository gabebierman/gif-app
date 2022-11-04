import query from "../config/database.config";

export async function addFavorite(gif) {
    try {
        const [firstGif] = await query(
            "SELECT * FROM favorite WHERE favorite.user_id = ? AND favorite.gif_id = ?",
            [gif.user_id, gif.gif_id]
        );
        if (firstGif) return { error: "Already in favorites", success: false };

        const { insertId } = await query("INSERT INTO favorite SET ? ", gif);

        return { data: { ...gif, insertId }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function removeFavorite(user_id, gif_id) {
    try {
        await query("DELETE FROM favorite WHERE user_id = ? AND gif_id = ?", [
            user_id,
            gif_id,
        ]);
        return { data: gif_id, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function getByUser(user_id) {
    try {
        const faves = await query(
            "SELECT gif_id, title, url FROM favorite WHERE favorite.user_id = ?",
            [user_id]
        );
        return { data: faves, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}
