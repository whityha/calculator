import styled, { css } from 'styled-components';

export const WrapperHeader = styled.header`
    display: flex;
    grid-area: header;
    align-items: center;
`;

export const Title = styled.h2`
    ${({
        theme: {
            color: { primary },
            settings: {
                header: { titleTextShadow },
            },
        },
    }) => css`
        text-shadow: ${`${titleTextShadow} ${primary}}`};
        color: ${primary};
    `}
    margin-right: auto;
`;

export const Nav = styled.nav`
    display: flex;
    ${({
        theme: {
            settings: {
                header: { navGap },
                font: { secondary },
            },
        },
    }) => css`
        gap: ${navGap};
        font-size: ${secondary};
    `}
`;

export const NavItem = styled.li`
    color: ${({
        theme: {
            color: { primary },
        },
    }) => primary};
`;
