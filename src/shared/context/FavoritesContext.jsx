import { useContext, createContext, useReducer, useCallback } from "react";
import {
    ADD_FAVORITE,
    CLEAR_FAVORITES,
    INITIAL_FAVORITES_STATE,
    REMOVE_FAVORITE,
    SET_FAVORITES,
    favoritesReducer,
} from "../reducers/favoritesReducer";
import { useUserContext } from "./UserContext";
import { useMutation } from "@tanstack/react-query";

const FavoritesContext = createContext(null);

export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
};

export function FavoritesProvider(props) {
    // pull in the current users ID from UserContext
    const { userID } = useUserContext();
    // buil mutations and pull out the mutat funciton
    const {} = useMutation;
    // call the mutate function addFavorite or removeFavorite
    //on error log the error to the console
    // on success dispatch the appropriate funciton
    const [favorite, dispatch] = useReducer(favoritesReducer, INITIAL_FAVORITES_STATE);

    const setFavorites = useCallback(
        (favorites) => {
            dispatch({ type: SET_FAVORITES, payload: favorites });
        },
        [dispatch]
    );

    const addFavorite = useCallback(
        (gif) => {
            dispatch({ type: ADD_FAVORITE, payload: gif });
        },
        [dispatch]
    );

    const removeFavorite = useCallback(
        (gif_id) => {
            dispatch({ type: REMOVE_FAVORITE, payload: gif_id });
        },
        [dispatch]
    );

    const clearFavorites = useCallback(() => {
        dispatch({ type: CLEAR_FAVORITES });
    }, [dispatch]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, addFavorite, removeFavorite, clearFavorites, setFavorites }}
        >
            {props.children}
        </FavoritesContext.Provider>
    );
}
