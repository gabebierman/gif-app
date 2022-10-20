import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./shared/components/Menu";
import LoginPage from "./components/LoginPage";
import FavoritesPage from "./components/FavoritesPage";
import SearchPage from "./components/SearchPage";
import { PrivateRoute, PublicRoute } from "./shared/components/ProtectedRoute";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route
                    path="/login"
                    element={<PublicRoute component={<LoginPage />} />}
                ></Route>
                <Route
                    path="/search"
                    element={<PrivateRoute component={<SearchPage />} />}
                ></Route>
                <Route
                    path="/favorites"
                    element={<PrivateRoute component={<FavoritesPage />} />}
                ></Route>
                <Route path="*" element={<Navigate to="/search" />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
