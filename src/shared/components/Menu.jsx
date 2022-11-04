import React from "react";
import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useSearchContext } from "../context/SearchContext";
import { useUserContext } from "../context/UserContext";

const Menu = () => {
    const { user, clearUser } = useUserContext();
    const { clearFavorites } = useFavoritesContext();
    const { clearSearchResults } = useSearchContext();
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
