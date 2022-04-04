import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

//전역 css
const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        word-wrap: break-word;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    ol,
    ul,
    li {
        list-style: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    img {
        max-width: 100%;
        height: auto;
        border: 0;
    }
    textarea:focus,
    button:focus,
    input:focus,
    select:focus,
    svg:focus {
    outline: none;
    }

    @font-face {
        font-family: 'Apple SD Gothic Neo','EliceRegular','Montserrat','Helvetica',sans-serif;
        font-size : 12px | 0.8em;
        font-style: normal;
        font-weight:300;
        font-style:normal;
        line-height: 20px | 120%;
    }

    @font-face {
        font-family: 'AppleSDGothicNeo';
        src: local(${process.env.PUBLIC}/font/AppleSDGothicNeoR.woff2);
    }

    @font-face {
        font-family : 'Montserrat';
        src: local(${process.env.PUBLIC}/font/Montserrat.ttf);
        unicode-range: U+0041-005A,U+0061-007A;
    }

    @font-face {
        font-family : 'Montserrat-italic';
        font-style: italic;
        font-weight: 300;
        src: url(${process.env.PUBLIC}/font/Montserrat-Italic.ttf);
        unicode-range: U+0041-005A,U+0061-007A;
    }

    @font-face {
        font-family: 'EliceRegular';
        font-weight: 300;
        src: url(${process.env.PUBLIC}/font/EliceRegular.ttf);
        unicode-range:U+AC00-U+D7A3;
    }

    @font-face {
        font-family: 'EliceBold';
        font-weight: 300;
        src: url(${process.env.PUBLIC}/font/EliceBold.ttf);
        unicode-range:U+AC00-U+D7A3, U+0030-0039;
    }

`;

export default GlobalStyle;
