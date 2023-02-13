import styled, { css } from 'styled-components';

export const WrapperHeader = styled.header`
    display: flex;
    grid-area: header;
    align-items: center;
`;

export const Title = styled.h2`
    ${({ theme: { colorPrimary, textShadow } }) => css`
        text-shadow: ${textShadow};
        color: ${colorPrimary};
    `}
    margin-right: auto;
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
