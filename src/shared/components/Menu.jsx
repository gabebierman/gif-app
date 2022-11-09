import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useSearchContext } from "../context/SearchContext";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import axios from "axios";
import { Nav } from "../styled/Nav";

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
        <Nav>
            {!user && (
                <Link className="link" to="/login">
                    Login
                </Link>
            )}
            {user && (
                <>
                    <Link className="link" to="/search">
                        Search
                    </Link>
                    <Link className="link" to="/favorites">
                        Favorites
                    </Link>
                    <Link
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
                    </Link>
                </>
            )}
        </Nav>
    );
};

export default Menu;
