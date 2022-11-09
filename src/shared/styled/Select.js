import styled from "@emotion/styled";

export const Select = styled("select")((props) => ({
    width: props.fullWidth && "100%",
    borderRadius: props.rounded && "5px",
    margin: "5px",
}));
