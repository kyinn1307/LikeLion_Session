import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 200px;
        padding : 0;
        overflow: scroll;

        font-family : "Pretendard-Regular";

        @media all and (min-width: 768px) and (max-width: 1023px) {
            margin: 0 auto;
            overflow: scroll;
        }
    
        @media all and (max-width: 767px) {
            margin: 0;
            overflow: scroll;
        }
    }    
`;
export default GlobalStyle;
