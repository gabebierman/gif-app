import styled from "@emotion/styled";

export const Form = styled("form")((props) => ({
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    width: props.width,
    margin: props.autoMargin && "auto",
    flexDirection: props.column && "column",
    justifyContent: "center",
    "& button": {
        marginLeft: !props.column && "auto",
    },
    "& input": {
        flexGrow: "1",
    },
}));
