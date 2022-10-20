import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => [...state, action.payload],
        removeFavorite: (state, action) => state.filter((e) => e.gif_id !== action.payload),
        clearFavorite: () => [],
    },
});

export const { addFavorite, removeFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
