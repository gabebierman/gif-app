import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
    );
};

export default Menu;
