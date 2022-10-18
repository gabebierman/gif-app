export const SET_SEARCH = "Set Search";
export const CLEAR_SEARCH = "Clear Search";

export const INTITAL_SEARCH_STATE = [];

export function searchReducer(state, action) {
    switch (action.type) {
        case SET_SEARCH:
            return action.payload;
        case CLEAR_SEARCH:
            return INTITAL_SEARCH_STATE;
        default:
            return state;
    }
}
