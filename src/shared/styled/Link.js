import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)((props) => ({
    flexBasis: "auto",
    padding: "5px",
    textDecoration: "none",
    color: "white",
    height: "20px",
    lineHeight: "20px",
    textAlign: "center",
    flexGrow: "1",
    backgroundColor: props.theme.colors.accent,
    "&:not(.active):hover": {
        backgroundColor: props.theme.colors.secondary,
    },
    "&.active": {
        backgroundColor: props.theme.colors.primary,
    },
}));
