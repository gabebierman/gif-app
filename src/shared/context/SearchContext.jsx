import { useContext, createContext, useReducer, useCallback } from "react";
import {
    INTITAL_SEARCH_STATE,
    searchReducer,
    SET_SEARCH,
    CLEAR_SEARCH,
} from "../reducers/searchReducer";

const SearchContext = createContext(null);
export const useSearchContext = () => useContext(SearchContext);

export function SearchProvider(props) {
    const [search, dispatch] = useReducer(searchReducer, INTITAL_SEARCH_STATE);

    const setSearch = useCallback(
        (searchResults) => dispatch({ type: SET_SEARCH, payload: searchResults })[dispatch]
    );

    const clearSearch = useCallback(() => dispatch({ type: CLEAR_SEARCH })[dispatch]);

    return (
        <SearchContext.Provider value={(search, setSearch, clearSearch)}>
            {props.children}
        </SearchContext.Provider>
    );
}
