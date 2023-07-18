import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        --main-Color : #6528F7;
        --border-Color: #DEE2E6;
        --font-Color: #343A40;
        --bg-Color: #ffffff;

        overflow-x: hidden;
        background: #ffffff;
        color: var(--font-Color);
    }

    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-slide div {
        cursor: pointer;
    }
`;

export default GlobalStyle;
