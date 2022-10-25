import styled from "@emotion/styled";

export const FlexContainer = styled.div((props) => ({
    display: "flex",
    flexDirection: props.column && "column",
    flexWrap: "wrap",
    margin: "5px",
    "@media(min-width: 500px)": {
        "&>*": {
            flexBasis: "25%",
        },
    },
    "& button": {
        marginTop: "auto",
    },
    "@media(min-width: 750px)": {
        "&>*": {
            flexBasis: "33%",
        },
    },
    "@media(min-width: 900px)": {
        "&>*": {
            flexBasis: "50%",
        },
    },
    justifyContent: "space-evenly",
}));
