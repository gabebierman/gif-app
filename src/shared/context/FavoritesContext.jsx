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
import axios from "axios";

const FavoritesContext = createContext(null);

export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
};

export function FavoritesProvider(props) {
    const { user } = useUserContext();
    //! Build mutations and pull out the mutate function
    const { mutate: addFavorite } = useMutation({
        mutationFn: async (gif) => {
            const { data } = await axios.put("/api/favorites/add", {
                ...gif,
                user_id: user?.id,
            });
            return data;
        },
        onSuccess: (res) => {
            if (res.success) {
                addToState(res.data);
            } else {
                console.log(res.error);
            }
        },
        onError: (err) => console.error(err),
    });

    const { mutate: removeFavorite } = useMutation({
        mutationFn: async (gif_id) => {
            const { data } = await axios.delete(`/api/favorites/delete/${gif_id}/${user?.id}`);
            return data;
        },
        onSuccess: (res) => {
            if (res.success) {
                removeFromState(res.data);
            } else {
                console.log(res.error);
            }
        },
        onError: (err) => console.error(err),
    });

    const [favorites, dispatch] = useReducer(favoritesReducer, INITIAL_FAVORITES_STATE);

    const setFavorites = useCallback(
        (favorites) => {
            dispatch({ type: SET_FAVORITES, payload: favorites });
        },
        [dispatch]
    );

    const addToState = useCallback(
        (gif) => {
            dispatch({ type: ADD_FAVORITE, payload: gif });
        },
        [dispatch]
    );

    const removeFromState = useCallback(
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
