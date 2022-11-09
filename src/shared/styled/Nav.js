import styled from "@emotion/styled";

export const Nav = styled("nav")((props) => ({
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: props.theme.colors.accent,
}));
