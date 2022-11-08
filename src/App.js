import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./shared/components/Menu";
import {
    FavoritesPageWithAuth,
    LoginPageWithAuth,
    SearchPageWithAuth,
} from "./shared/components/ProtectedRoute";
import { useState } from "react";
import { useUserContext } from "./shared/context/UserContext";
import { useFavoritesContext } from "./shared/context/FavoritesContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
    const { setUser } = useUserContext;
    const { setFavorites } = useFavoritesContext;
    const [isFetched, setIsFetched] = useState(false);
    useQuery(["userInfo"], () => axios.get("/api/users/verify"), {
        enabled: !isFetched,
        retry: 0,
        staleTime: Infinity,
        refetchOnMount: false,
        onSettled: ({ data: res }) => {
            setIsFetched(true);
            if (res?.data?.success) {
                setUser(res.data.data.user);
                setFavorites(res.data.data.favorites);
            }
        },
    });
    if (!isFetched) return <></>;
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/login" element={<LoginPageWithAuth />}></Route>
                <Route path="/search" element={<SearchPageWithAuth />}></Route>
                <Route path="/favorites" element={<FavoritesPageWithAuth />}></Route>
                <Route path="*" element={<Navigate to="/search" />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
