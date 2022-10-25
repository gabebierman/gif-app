import React from "react";
import { NavLink } from "react-router-dom";
import { clearFavorites } from "../redux/favoriteSlice";
import { clearUser } from "../redux/userSlice";
import { clearSearch } from "../redux/searchSlice";
import { connect } from "react-redux";

const Menu = ({ user, clearFavorites, clearSearch, clearUser }) => {
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
                            clearSearch();
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

const mapDispatchToProps = (dispatch) => {
    return {
        clearState: () => {
            dispatch(clearUser());
            dispatch(clearFavorites());
            dispatch(clearSearch());
        },
    };
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
