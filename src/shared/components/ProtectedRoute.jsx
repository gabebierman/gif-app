import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const withAuthentication = (requiresUser) => {
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
            return <>{props.component}</>;
        }

        return <Navigate to={redirectTo} />;
    };
};

export const PrivateRoute = withAuthentication(true);

export const PublicRoute = withAuthentication(false);
