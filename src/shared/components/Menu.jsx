import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Menu = () => {
    const { user, clearUser } = useUserContext();
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
                    <NavLink className="link" to="/login" onClick={clearUser}>
                        Logout
                    </NavLink>
                </>
            )}
        </nav>
    );
};

export default Menu;
