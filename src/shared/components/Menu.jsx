import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <NavLink className="link" to="/login">
                Login
            </NavLink>
            <NavLink className="link" to="/search">
                Search
            </NavLink>
            <NavLink className="link" to="/favorites">
                Favorites
            </NavLink>
        </nav>
    );
};

export default Menu;
