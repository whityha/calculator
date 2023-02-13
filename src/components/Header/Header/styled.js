import styled, { css } from 'styled-components';

export const WrapperHeader = styled.header`
    display: flex;
    grid-area: header;
    align-items: center;
`;

export const Title = styled.h2`
    ${({ theme: { colors } }) => css`
        text-shadow: 0px 0px 10px ${colors.main};
        color: ${colors.main};
    `}
    margin-right: auto;
`;

export const Nav = styled.nav`
    display: flex;
    ${({ theme: { gap, fontSize } }) => css`
        gap: ${gap.main};
        font-size: ${fontSize.secondary};
    `}
`;

export const NavItem = styled.li`
    color: ${({ theme: { colors } }) => colors.main};
`;
