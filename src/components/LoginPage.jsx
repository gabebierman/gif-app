import React, { useState } from "react";
import { useUserContext } from "../shared/context/UserContext";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext();

    return (
        <>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            ></input>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
            ></input>
            <button
                disabled={username.length < 3 || password.length < 3}
                onClick={() => {
                    if (username.length > 1 && password.length > 1) {
                        setUser({ username });
                    }
                }}
            >
                Login
            </button>
        </>
    );
};

export default LoginPage;
