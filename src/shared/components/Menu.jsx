import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useSearchContext } from "../context/SearchContext";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import axios from "axios";

const Menu = () => {
    const { user, clearUser } = useUserContext();
    const { clearFavorites } = useFavoritesContext();
    const { clearSearchResults } = useSearchContext();
    const [logout, setLogout] = useState(false);
    useQuery(["logout", logout], () => axios.get("/api/users/logout"), {
        enabled: logout,
        onSuccess: () => {
            setLogout(false);
            clearUser();
            clearSearchResults();
            clearFavorites();
        },
        onError: () => console.log("Error logging out"),
    });
    return (
        <nav>
            {!user && (
                <NavLink className="link" to="/login">
                    Login
                </NavLink>
            )}
            {user && (
                <>
                    <NavLink className="link" to="/search">
                        Search
                    </NavLink>
                    <NavLink className="link" to="/favorites">
                        Favorites
                    </NavLink>
                    <NavLink
                        className="link"
                        to="/login"
                        onClick={() => {
                            setLogout(true);
                            clearUser();
                            clearSearchResults();
                            clearFavorites();
                        }}
                    >
                        Logout
                    </NavLink>
                </>
            )}
        </nav>
    );
};

export default Menu;
