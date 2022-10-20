import React from "react";
import { useFavoritesContext } from "../shared/context/FavoritesContext";
import GifDisplay from "../shared/components/GifDisplay";

const FavoritesPage = () => {
    const { favorite, removeFavorite } = useFavoritesContext();
    return (
        <>
            {favorite.length < 1 && "Try adding some favorites!"}
            {favorite.length !== 0 &&
                favorite.map((e) => (
                    <GifDisplay
                        key={e.gif_id}
                        {...e}
                        isFavorite={true}
                        removeFavorite={removeFavorite}
                    />
                ))}
        </>
    );
};

export default FavoritesPage;
