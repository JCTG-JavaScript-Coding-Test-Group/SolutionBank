import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
    box-sizing: border-box;
    }

    body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    height:100%;
    }
    
    h1 {
    text-align: center;
    margin: 30px 0 60px 0;
    padding: 20px 0;
    color: ${props => props.theme.textColor};
    border-bottom: 4px solid ${props => props.theme.borderLevelTitle};
    }

`;
