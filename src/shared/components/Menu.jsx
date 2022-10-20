import React from "react";
import { NavLink } from "react-router-dom";
import { clearFavorite, clearSearch, clearUser } from "../redux/store";
import { connect } from "react-redux";

const Menu = (user, clearState) => {
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
                    <NavLink className="link" to="/login" onClick={clearState}>
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
            dispatch(clearFavorite());
            dispatch(clearSearch());
        },
    };
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
