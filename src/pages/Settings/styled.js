import styled, { css } from 'styled-components';

const WrapperSettings = styled.div`
    display: grid;
    grid-template-areas:
        'header header'
        'settingsList settingList';
    ${({
        theme: {
            gridSizes: { xsm, sm, xmd, md },
        },
    }) => css`
        grid-template-rows: ${xsm} ${sm} ${xmd};
        grid-template-columns: ${md} ${sm};
    `}
    background: ${({ theme: { backgroundPrimary } }) => backgroundPrimary};
    max-width: ${({
        theme: {
            maxWidth: { lg },
        },
    }) => lg};
    height: ${({ theme: { heightPercent } }) => heightPercent['100']};
    margin: 0 auto;
`;

const Title = styled.h1`
    color: ${({ colorPrimary }) => colorPrimary};
`;

export { Title, WrapperSettings };
