import React from "react";
import GifDisplay from "../shared/components/GifDisplay";
import { connect } from "react-redux";
import { removeFavorite } from "../shared/redux/store";

const FavoritesPage = ({ favorites, removeFavorite }) => {
    return (
        <>
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
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeFavorite: (gif_id) => dispatch(removeFavorite(gif_id)),
});

const mapStateToProps = (state) => ({
    favorites: state.favorites,
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
