import styled, { css } from 'styled-components';

export const WrapperHistory = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    grid-area: history;

    ${({ theme: { colors } }) => css`
        border-left: 2px solid ${colors.main};
        border-right: 2px solid ${colors.main};
    `};
    overflow-y: auto;

    ${({
        theme: {
            gap: { main },
            padding: { p0, p2, p5 },
        },
    }) => css`
        gap: ${main};
        padding: ${`${p0} ${p2} ${p5} ${p2}`};
    `};
`;

export const Title = styled.h1`
    position: sticky;
    top: 0;
    background: ${({ theme: { background } }) => background.main};
    display: block;
    width: 100%;
    padding: ${({
        theme: {
            padding: { p3 },
        },
    }) => `${p3} ${p3}`};
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    ${({ theme: { gap, fontSize } }) => css`
        gap: ${gap.main};
        font-size: ${fontSize.main};
    `};
    font-weight: bold;
`;

export const ListItem = styled.li`
    border-top: 1px solid ${({ theme: { colors } }) => colors.main};
    padding: ${({ theme: { padding } }) => padding.p2};
    text-align: center;
`;
