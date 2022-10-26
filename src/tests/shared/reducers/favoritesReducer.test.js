import {
    favoritesReducer,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    CLEAR_FAVORITES,
    INITIAL_FAVORITES_STATE,
} from "../../../shared/reducers/favoritesReducer";

describe("add favorites", () => {
    it("should add single gif to favorites", () => {
        let state = favoritesReducer([], {
            type: ADD_FAVORITE,
            payload: { title: "First", url: "x", gif_id: "1" },
        });
        expect(state.length).toBe(1);
        expect(state).toEqual([{ title: "First", url: "x", gif_id: "1" }]);
        state = favoritesReducer(state, {
            type: ADD_FAVORITE,
            payload: { title: "Second", url: "xy", gif_id: "2" },
        });
        expect(state.length).toBe(2);
        expect(state).toEqual([
            { title: "First", url: "x", gif_id: "1" },
            { title: "Second", url: "xy", gif_id: "2" },
        ]);
    });

    it("should remove single gif from favorite", () => {
        let startingState = [
            { title: "First", url: "x", gif_id: "1" },
            { title: "Second", url: "xy", gif_id: "2" },
            { title: "Third", url: "xyy", gif_id: "3" },
        ];
        let state = favoritesReducer(startingState, { type: REMOVE_FAVORITE, payload: "2" });
        expect(state.length).toBe(2);
        expect(state).toEqual([
            { title: "First", url: "x", gif_id: "1" },
            { title: "Third", url: "xyy", gif_id: "3" },
        ]);
        expect(state).not.toBe(startingState);
        state = favoritesReducer(state, { type: REMOVE_FAVORITE, payload: "16" });
        expect(state).toEqual([
            { title: "First", url: "x", gif_id: "1" },
            { title: "Third", url: "xyy", gif_id: "3" },
        ]);
        expect(state).not.toBe(startingState);
    });
    it("should clear all gifs from favorites", () => {
        let startingState = [
            { title: "First", url: "x", gif_id: "1" },
            { title: "Second", url: "xy", gif_id: "2" },
            { title: "Third", url: "xyy", gif_id: "3" },
        ];
        let state = favoritesReducer(startingState, {
            type: CLEAR_FAVORITES,
        });
        expect(state).toEqual([]);
        expect(state).not.toBe(startingState);
    });

    it("should return default state", () => {
        let startingState = [
            { title: "First", url: "x", gif_id: "1" },
            { title: "Second", url: "xy", gif_id: "2" },
            { title: "Third", url: "xyy", gif_id: "3" },
        ];
        let state = favoritesReducer(startingState, {});
        expect(state).toBe(startingState);
    });
});
