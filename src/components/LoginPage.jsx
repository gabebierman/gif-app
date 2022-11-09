import React, { useState } from "react";
import { useUserContext } from "../shared/context/UserContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFavoritesContext } from "../shared/context/FavoritesContext";
import { Label } from "../shared/styled/Label";
import { Input } from "../shared/styled/Input";
import { Button } from "../shared/styled/Button";
import { FlexContainer } from "../shared/styled/FlexContainer";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext();
    const { setFavorites } = useFavoritesContext();
    const {
        data: resObject,
        error: reqError,
        mutate: login,
    } = useMutation({
        mutationFn: async (user) => {
            const { data } = await axios.post("/api/users/login", user);
            return data;
        },
        onSuccess: (res) => {
            if (res.success) {
                setUser(res.data.user);
                setFavorites(res.data.favorites);
            }
            return res;
        },
    });
    return (
        <FlexContainer>
            <Label htmlFor="username">Username</Label>
            <Input
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            ></Input>
            <Label htmlFor="password">Password</Label>
            <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
            ></Input>
            <Button
                disabled={username.length < 3 || password.length < 7}
                onClick={() => {
                    {
                        login({ username, password });
                    }
                }}
            >
                Login
            </Button>
            {resObject && resObject.error && (
                <div style={{ textAlign: "center" }}>{resObject?.error}</div>
            )}
            {reqError && (
                <div style={{ textAlign: "center" }}>
                    Something went wrong, please try again later
                </div>
            )}
        </FlexContainer>
    );
};

export default LoginPage;
