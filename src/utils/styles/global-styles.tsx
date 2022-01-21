import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    html,
    body{
        overflow:hidden;
    }
    * {
        box-sizing: border-box;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle;