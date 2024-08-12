import {createGlobalStyle} from 'styled-components';

export const AppRoot = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }
    main {
        background-color: ${props => props.theme.main};
        scroll-behavior: smooth;
    }
`;