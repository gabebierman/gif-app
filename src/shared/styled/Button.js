import styled from "@emotion/styled";

export const Button = styled("button")((props) => ({
    color: "white",
    backgroundColor: props.theme.colors[props.variant ?? "primary"],
    borderColor: "black",
    borderWidth: "1px",
    borderRadius: "10px",
    verticalAlign: "middle",
    curser: "pointer",
    "&:hover": {
        backgroundColor: props.theme.colors.hover[props.variant ?? "primary"],
    },
    "&:disabled": {
        backgroundColor: props.theme.colors[props.variant ?? "secondary"],
    },
}));
