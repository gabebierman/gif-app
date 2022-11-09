import React from "react";
import { Button } from "../styled/Button";
import { FlexContainer } from "../styled/FlexContainer";
import { Img } from "../styled/Image";

const GifDisplay = ({ gif_id, title, url, addFavorite, removeFavorite, isFavorite }) => {
    return (
        <>
            <FlexContainer key={gif_id}>
                <h3>{title}</h3>
                <Img src={url} alt={title}></Img>
                {isFavorite && (
                    <Button onClick={() => removeFavorite(gif_id)}>Remove Favorite</Button>
                )}
                {!isFavorite && (
                    <Button onClick={() => addFavorite({ title, url, gif_id })}>
                        Add Favorite
                    </Button>
                )}
            </FlexContainer>
        </>
    );
};

export default GifDisplay;
