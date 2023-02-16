import styled, { css } from 'styled-components';

export const WrapperHistory = styled.div`
    display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
    position: relative;
    flex-direction: column;
    align-items: center;
    grid-area: history;

    ${({ theme: { colorPrimary } }) => css`
        border-left: 2px solid ${colorPrimary};
        border-right: 2px solid ${colorPrimary};
    `};
    overflow-y: auto;

    ${({
        theme: {
            gap: { main },
            padding: { p0, p2, p5 },
        },
    }) => css`
        gap: ${main}px;
        padding: ${`${p0}px ${p2}px ${p5}px`};
    `};
`;

export const Title = styled.h1`
    position: sticky;
    top: 0;
    background: ${({ theme: { backgroundPrimary } }) => backgroundPrimary};
    display: block;
    width: 100%;
    padding: ${({
        theme: {
            padding: { p3 },
        },
    }) => `${p3}px ${p3}px`};
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    ${({ theme: { gap, fontSize } }) => css`
        gap: ${gap.main}px;
        font-size: ${fontSize.main}px;
    `};
    font-weight: bold;
`;

export const ListItem = styled.li`
    border-top: 1px solid ${({ theme: { colorPrimary } }) => colorPrimary};
    padding: ${({ theme: { padding } }) => padding.p2}px;
    text-align: center;
`;
