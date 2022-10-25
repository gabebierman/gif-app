import React, { useState } from "react";
import { Button } from "../styled/Button";

const GifDisplay = ({ gif_id, title, url, addFavorite, removeFavorite, isFavorite }) => {
    return (
        <>
            <div key={gif_id}>
                <h3>{title}</h3>
                <img src={url} alt={title}></img>
                {isFavorite && (
                    <Button onClick={() => removeFavorite(gif_id)}>Remove Favorite</Button>
                )}
                {!isFavorite && (
                    <Button onClick={() => addFavorite({ title, url, gif_id })}>
                        Add Favorite
                    </Button>
                )}
            </div>
        </>
    );
};

export default GifDisplay;
