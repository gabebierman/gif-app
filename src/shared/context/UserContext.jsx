import { useContext, createContext, useReducer, useCallback } from "react";
import {
    CLEAR_USER,
    INTITAL_USER_STATE,
    SET_USER,
    userReducer,
} from "../reducers/userReducer";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

export function UserProvider(props) {
    const [user, dispatch] = useReducer(userReducer, INTITAL_USER_STATE);

    const setUser = useCallback(
        (user) => dispatch({ type: SET_USER, payload: user })[dispatch]
    );

    const clearUser = useContext(() => dispatch({ type: CLEAR_USER })[dispatch]);

    return (
        <UserContext.Provider value={{ user, setUser, clearUser }}>
            {props.children}
        </UserContext.Provider>
    );
}
