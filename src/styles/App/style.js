import styled from 'styled-components';

export const StyledApp = styled.div`
    height: 100vh;
    background: ${({ theme }) => theme.background.primary};
`;

export const StyledWrapperApp = styled.div`
    display: grid;
    grid-template-areas:
        'header header header'
        'display history controls'
        'keypad history controls';
    grid-template-rows: 1fr 1fr 7fr;
    grid-template-columns: 4fr 1fr 1fr;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
`;
