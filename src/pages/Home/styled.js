import styled, { css } from 'styled-components';

const grid = css`
    grid-template-rows: ${({
        theme: {
            gridSizes: { xsm, lg },
        },
    }) => `repeat(2, ${xsm}) ${lg}`};

    grid-template-columns: ${({
        theme: {
            gridSizes: { md, sm },
        },
    }) => `${md} ${sm}`};
`;

const gridArea = `
    grid-template-areas:
    'header header'
    'display history'
    'keypad history';
`;

const WrapperHome = styled.div`
    display: grid;
    max-width: ${({
        theme: {
            maxWidth: { lg },
        },
    }) => lg};
    margin: 0 auto;
    height: ${({ theme: { heightPercent } }) => heightPercent['100']};

    ${gridArea};
    ${grid}

    @media ${({ theme: { media } }) => media.large} {
        max-width: ${({ theme: { maxWidth } }) => maxWidth.max};
        ${gridArea}
        ${grid}
    }

    @media ${({ theme: { media } }) => media.tablet} {
        grid-template-areas:
            'header'
            'display'
            'keypad'
            'history';
        grid-template-rows: ${({
            theme: {
                // eslint-disable-next-line no-unused-vars
                gridSizes: { xsm, sm, md, lg },
            },
        }) => `${sm} ${sm} ${sm} ${lg}`};
        grid-template-columns: ${({ theme: { gridSizes } }) =>
            `${gridSizes.xsm}`};
    }

    @media ${({ theme: { media } }) => media.phone} {
        grid-template-areas:
            'header'
            'display'
            'keypad'
            'history';
        grid-template-rows: ${({
            theme: {
                // eslint-disable-next-line no-unused-vars
                gridSizes: { xsm, sm, md, lg },
            },
        }) => `${sm} ${sm} ${sm} ${lg}`};
        grid-template-columns: ${({ theme: { gridSizes } }) =>
            `${gridSizes.xsm}`};
    }
`;

export default WrapperHome;
