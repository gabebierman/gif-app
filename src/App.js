import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./shared/components/Menu";
import LoginPage from "./components/LoginPage";
import FavoritesPage from "./components/FavoritesPage";
import SearchPage from "./components/SearchPage";
import {
    FavoritesPageWithAuth,
    LoginPageWithAuth,
    PrivateRoute,
    PublicRoute,
    SearchPageWithAuth,
} from "./shared/components/ProtectedRoute";

function App() {
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
