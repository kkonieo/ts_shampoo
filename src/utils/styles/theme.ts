import { DefaultTheme } from 'styled-components';
import color from './color';

// COMMON STYLE
// button styled 지정
const blueButton: DefaultTheme = {
    color: {
        background: color.lightBlue,
        text: color.white,
    },
};
const defaultButton: DefaultTheme = {
    color: {
        background: '#f5f5f5',
        text: '#757575',
        border: '#e0e0e0',
    },
};

// theme 지정
const navTheme: DefaultTheme = {
    color: {
        background: color.gray,
        main: color.lightBlue,
        sub: color.white,
    },
};

const darkTheme: DefaultTheme = {
    color: {
        background: '#',
        main: '#',
        sub: 'white',
    },
};

export { navTheme, darkTheme, blueButton, defaultButton };
