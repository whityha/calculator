import styled, { css } from 'styled-components';

const WrapperHome = styled.div`
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

    max-width: ${({
        theme: {
            maxWidth: { lg },
        },
    }) => lg};
    margin: 0 auto;
    height: ${({ theme: { heightPercent } }) => heightPercent['100']};
`;

export default WrapperHome;
