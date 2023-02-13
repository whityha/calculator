import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        color: ${({ theme: { colors } }) => colors.main};   
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
