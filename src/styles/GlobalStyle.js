import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        overflow-x: hidden;
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
