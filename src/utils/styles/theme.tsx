import { DefaultTheme } from "styled-components";
import color from './color';

const lightTheme: DefaultTheme = {
    color: {
        background: color.gray,
        main: color.lightblue,
        sub: color.white,
    }
};

const darkTheme: DefaultTheme = {
    color: {
        background: "",
        main: "",
        sub: "",
    }
};

export { lightTheme, darkTheme };
