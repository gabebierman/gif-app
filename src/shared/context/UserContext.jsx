import { useContext, createContext, useReducer } from "react";
import {
    CLEAR_USER,
    INTITAL_USER_STATE,
    SET_USER,
    userReducer,
} from "../reducers/userReducer";

const UserContext = createContext(null);
export const useSearchContext = () => useContext(UserContext);

export function SearchProvider() {
    const [user, dispatch] = useReducer(userReducer, INTITAL_USER_STATE);

    const setUser = (user) => dispatch({ type: SET_USER, payload: user });

    const clearUser = () => dispatch({ type: CLEAR_USER });

    return (
        <UserContext.Provider value={(user, setUser, clearUser)}>
            {props.children}
        </UserContext.Provider>
    );
}
