import { useContext, createContext, useReducer, useCallback } from "react";
import {
    ADD_FAVORITE,
    CLEAR_FAVORITES,
    INTITAL_FAVORITES_STATE,
    REMOVE_FAVORITE,
    favoritesReducer,
} from "../reducers/favoritesReducer";

const FavoritesContext = createContext(null);
export const useFavoritesContext = () => useContext(FavoritesContext);

export function FavoritesProvider(props) {
    const [favorites, dispatch] = useReducer(favoritesReducer, INTITAL_FAVORITES_STATE);

    const addFavorite = useCallback(
        (gif) => dispatch({ type: ADD_FAVORITE, payload: gif })[dispatch]
    );

    const removeFavorite = useCallback(
        (gif_id) => dispatch({ type: REMOVE_FAVORITE, payload: gif_id })[dispatch]
    );

    const clearFavorites = useCallback(() => dispatch({ type: CLEAR_FAVORITES })[dispatch]);

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
        >
            {props.children}
        </FavoritesContext.Provider>
    );
}
