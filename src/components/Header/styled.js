import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
    display: flex;
    grid-area: header;
    align-items: center;
    @media ${({ theme: { media } }) => media.tablet} {
        flex-direction: column;
        justify-content: space-around;
    }

    @media ${({ theme: { media } }) => media.phone} {
        flex-direction: column;
        justify-content: space-around;
    }
`;

export const Title = styled.h2`
    ${({
        theme: {
            colorPrimary,
            colorShadow,
            textShadow: { main },
        },
    }) => css`
        text-shadow: ${main} ${colorShadow};
        color: ${colorPrimary};
    `}
    margin-right: auto;

    @media ${({ theme: { media } }) => media.tablet} {
        margin-right: 0;
    }

    @media ${({ theme: { media } }) => media.phone} {
        margin-right: 0;
    }
`;

export const Nav = styled.nav`
    display: flex;
    ${({ theme: { gap, fontSize } }) => css`
        gap: ${gap.main}px;
        font-size: ${fontSize.secondary}px;
    `}
`;

export const NavItem = styled.li`
    color: ${({ theme: { colorPrimary } }) => colorPrimary};
`;
