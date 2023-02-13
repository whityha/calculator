import styled, { css } from 'styled-components';

export const StyledApp = styled.div`
    height: 100vh;
    background: ${({ theme: { background } }) => background.main};
`;

export const StyledWrapperApp = styled.div`
    display: grid;
    grid-template-areas:
        'header header'
        'display history'
        'keypad history';
    ${({
        theme: {
            gridSizes: { xsm, sm, md, lg },
        },
    }) => css`
        grid-template-rows: repeat(2, ${xsm}) ${lg};
        grid-template-columns: ${md} ${sm};
    `}

    max-width: 80%;
    margin: 0 auto;
    height: ${({ theme: { height } }) => height['100']};
`;
