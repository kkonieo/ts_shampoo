import { DefaultTheme } from 'styled-components';
import color from './color';
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

export { navTheme, darkTheme };
