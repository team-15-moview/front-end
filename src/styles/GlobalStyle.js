import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        --main-Color : #6528F7;
        --border-Color: #DEE2E6;
        --font-Color: #343A40;
        --white-Color: #ffffff;

        overflow-x: hidden;
        background: #fcfcfc;
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
