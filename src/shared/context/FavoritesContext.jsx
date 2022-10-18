import { useContext, createContext, useReducer } from "react";
import {
    ADD_FAVORITE,
    CLEAR_FAVORITES,
    INTITAL_FAVORITES_STATE,
    REMOVE_FAVORITE,
} from "../reducers/favoritesReducer";

const FavoritesContext = createContext(null);
export const useFavoritesContext = () => useContext(FavoritesContext);

export function FavoritesProvider(props) {
    const [favorites, dispatch] = useReducer(favoritesReducer, INTITAL_FAVORITES_STATE);

    const addFavorite = (gif) => dispatch({ type: ADD_FAVORITE, payload: gif });

    const removeFavorite = (gif_id) => dispatch({ type: REMOVE_FAVORITE, payload: gif_id });

    const clearFavorites = () => dispatch({ type: CLEAR_FAVORITES });

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
        >
            {props.children}
        </FavoritesContext.Provider>
    );
}
