import { useContext, createContext, useReducer } from "react";
import {
    INTITAL_SEARCH_STATE,
    searchReducer,
    SET_SEARCH,
    CLEAR_SEARCH,
} from "../reducers/searchReducer";

const SearchContext = createContext(null);
export const useSearchContext = () => useContext(SearchContext);

export function SearchProvider() {
    const [search, dispatch] = useReducer(searchReducer, INTITAL_SEARCH_STATE);

    const setSearch = (searchResults) =>
        dispatch({ type: SET_SEARCH, payload: searchResults });

    const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

    return (
        <SearchContext.Provider value={(search, setSearch, clearSearch)}>
            {props.children}
        </SearchContext.Provider>
    );
}
