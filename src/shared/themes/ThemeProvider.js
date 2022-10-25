import { ThemeProvider as ThemeWrapper } from "@emotion/css";
import theme from "./themes";

export const ThemeProvider = (props) => {
    return <ThemeWrapper theme={theme}>{props.children}</ThemeWrapper>;
};
