import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "./shared/components/Menu";
import LoginPage from "./components/LoginPage";
import FavoritesPage from "./components/FavoritesPage";
import SearchPage from "./components/SearchPage";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
    const [id, setID] = useState("");
    const [searchString, setSearchString] = useState(null);
    const { isLoading, error, data } = useQuery(
        ["getComments", searchString],
        async () => getPosts(searchString),
        { enabled: !!searchString }
    );
    async function getPosts(searchString) {
        const json = await axios.get(`https://jsonplacehilder.typicode.com${searchString}`);
        return json.data[0];
    }
    useEffect(() => {
        console.log(isLoading, error, data);
    }, [isLoading, error, data]);

    return (
        <Router>
            <input vlaue={id} onChange={(e) => setID(e.target.value)} />
            <button
                onClick={() => {
                    setSearchString(`/posts/${id}/commetns`);
                }}
            >
                Search
            </button>
            <Menu />
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/search" element={<SearchPage />}></Route>
                <Route path="/favorites" element={<FavoritesPage />}></Route>
                <Route path="*" element={<Navigate to="/search" />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
