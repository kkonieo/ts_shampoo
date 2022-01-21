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
    }

    @font-face {
        font-family: 'Apple SD Gothic Neo','EliceRegular','Montserrat','Helvetica',sans-serif;
        fontsize : 12px | 0.8em;
        font-style: normal;
        font-weight:300;
        font-style:normal;
        line-height: 20px | 120%;
    }

    @font-face {
        font-family: 'AppleSDGothicNeo';
        src: url(${process.env.PUBLIC}/font/AppleSDGothicNeoR.woff2);
    }

    @font-face {
        font-family : 'Montserrat';
        src: url()
    }

    @font-face {
        font-family : 'Montserrat-italic';
        font-style: normal;
        font-weight: 300;
        font-style:normal;
        src: url(${process.env.PUBLIC})
    }

    @font-face {
        font-family: 'EliceRegular';
        src: url(${process.env.PUBLIC}/font/EliceRegular.ttf);
    }

    @font-face {
        font-family: 'EliceBold';
        src: url(${process.env.PUBLIC}/font/EliceBold.ttf);
    }

`;

export default GlobalStyle;
