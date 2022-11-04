import query from "../config/database.config";

export async function addFavorite(gif) {
    try {
        const [firstGif] = await query(
            "SELECT * FROM favorite WHERE favorite.user_id = $1 AND favorite.gif_id = $2",
            [gif.user_id, gif.gif_id]
        );
        if (firstGif) return { error: "Already in favorites", success: false };

        const { insertId } = await query(
            "INSERT INTO favorite (gif-id  , user_id , title , url) VALUES ($1 , $2 , $3 , $4",
            [gif.gif_id, gif.user_id, gif.title, gif.url]
        );

        return { data: { ...gif, insertId }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function removeFavorite(user_id, gif_id) {
    try {
        await query("DELETE FROM favorite WHERE user_id = $1 AND gif_id = $2", [
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
            "SELECT gif_id, title, url FROM favorite WHERE favorite.user_id = $1",
            [user_id]
        );
        return { data: faves, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}
