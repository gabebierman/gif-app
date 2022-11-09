import React from "react";
import { useFavoritesContext } from "../shared/context/FavoritesContext";
import GifDisplay from "../shared/components/GifDisplay";
import { FlexContainer } from "../shared/styled/FlexContainer";

const FavoritesPage = () => {
    const { favorites, removeFavorite } = useFavoritesContext();
    return (
        <FlexContainer>
            {favorites.length < 1 && "Try adding some favorites!"}
            {favorites.length !== 0 &&
                favorites.map((e) => (
                    <GifDisplay
                        key={e.gif_id}
                        {...e}
                        isFavorite={true}
                        removeFavorite={removeFavorite}
                    />
                ))}
        </FlexContainer>
    );
};

export default FavoritesPage;
