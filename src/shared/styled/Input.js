import styled from "@emotion/styled";

export const Input = styled("input")((props) => ({
    width: props.fullWidth && "100%",
    borderRadius: props.rounded && "5px",
    margin: "5px",
}));
