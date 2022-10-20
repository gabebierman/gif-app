import { ThemeProvider as ThemeWrapper } from "@emotion/css";

export const ThemeProvider = (props) => {
    return <ThemeWrapper theme={theme}>{props.children}</ThemeWrapper>;
};
