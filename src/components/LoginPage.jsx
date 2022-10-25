import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../shared/redux/store";
import { Button } from "../shared/styled/Button";
import { FlexContainer } from "../shared/styled/FlexContainer";
import { Form } from "../shared/styled/Form";

const LoginPage = ({ login }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <Form>
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
                <Button
                    disabled={username.length < 3 || password.length < 3}
                    onClick={() => {
                        if (username.length > 1 && password.length > 1) {
                            login({ username });
                        }
                    }}
                >
                    Login
                </Button>
            </Form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(setUser(user)),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
