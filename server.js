import express from "express";
import userRoutes from "./server/routes/user.routes";
import favoritesRoutes from "./server/routes/favorites.routes";
import passport from "./server/config/passport.config";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/build"));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoritesRoutes);
app.get("*", (req, res) => {
    return res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => console.log(`gif-app backend functional. Port ${PORT}`));
