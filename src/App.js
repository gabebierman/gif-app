import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "./shared/components/Menu";
import LoginPage from "./components/LoginPage";
import FavoritesPage from "./components/FavoritesPage";
import SearchPage from "./components/SearchPage";

function App() {
    return (
        <Router>
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
