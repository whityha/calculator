import styled, { css } from 'styled-components';

export const StyledApp = styled.div`
    height: 100vh;
    background: ${({ theme }) => theme.background.primary};
`;

export const StyledWrapperApp = styled.div`
    display: grid;
    ${({
        theme: {
            settings: {
                home: { gridAreas, gridRows, gridColumns },
            },
        },
    }) => css`
        grid-template-areas: ${gridAreas};
        grid-template-rows: ${gridRows};
        grid-template-columns: ${gridColumns};
    `}
    max-width: 80%;
    margin: 0 auto;
    height: 100%;
`;
