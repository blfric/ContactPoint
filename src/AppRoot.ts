import {createGlobalStyle} from 'styled-components';

export const AppRoot = createGlobalStyle`
    main {
        background-color: ${props => props.theme.main};
        scroll-behavior: smooth;
    }
`;