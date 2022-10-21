import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => [...state, action.payload],
        removeFavorite: (state, action) =>
            state.filter((val) => val.gif_id !== action.payload),
        clearFavorites: () => [],
    },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
