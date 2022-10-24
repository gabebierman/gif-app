import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import FavoritesPage from "../../components/FavoritesPage";
import LoginPage from "../../components/LoginPage";
import SearchPage from "../../components/SearchPage";
import { useUserContext } from "../context/UserContext";

const withAuthentication = (WrappedComponent, requiresUser) => {
    return (props) => {
        const { user } = useUserContext();
        const redirectTo = useMemo(
            () => (requiresUser ? "/login" : "/search"),
            [requiresUser]
        );

        const authorized = useMemo(() => {
            return (!requiresUser && !user) || (requiresUser && user);
        }, [requiresUser, user]);

        if (authorized) {
            return <WrappedComponent {...props} />;
        }

        return <Navigate to={redirectTo} />;
    };
};

export const FavoritesPageWithAuth = withAuthentication(FavoritesPage, true);
export const SearchPageWithAuth = withAuthentication(SearchPage, true);
export const LoginPageWithAuth = withAuthentication(LoginPage, false);
