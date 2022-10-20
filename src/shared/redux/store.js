import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import favoritesReducer from "./favoriteSlice";
import searchReducer from "./searchSlice";

export default configureStore({
    reducer: {
        search: searchReducer,
        user: userReducer,
        favorites: favoritesReducer,
    },
});

export * from "./favoriteSlice";
export * from "./searchSlice";
export * from "./userSlice";
