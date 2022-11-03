import React from "react";

const GifDisplay = ({ gif_id, title, url, addFavorite, removeFavorite, isFavorite }) => {
    return (
        <>
            <div key={gif_id}>
                <h3>{title}</h3>
                <img src={url} alt={title}></img>
                {isFavorite && (
                    <button onClick={() => removeFavorite(gif_id)}>Remove Favorite</button>
                )}
                {!isFavorite && (
                    <button onClick={() => addFavorite({ title, url, gif_id })}>
                        Add Favorite
                    </button>
                )}
            </div>
        </>
    );
};

export default GifDisplay;
