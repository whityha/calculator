import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        color: white;        
        font-family: 'Montserrat';
    }
    body {
        background: #2b2b2b;
    }
    a {
        color: inherit;
    }

    a:hover {
        text-decoration: underline;
    }
`;
