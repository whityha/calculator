import styled, { css } from 'styled-components';

export const WrapperHistory = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    grid-area: history;
    border-left: 2px solid
        ${({ theme: { background } }) => background.secondary};
    overflow-y: auto;

    ${({
        theme: {
            settings: {
                history: { listGap, padding },
            },
        },
    }) => css`
        gap: ${listGap};
        padding: ${padding};
    `};
`;

export const Title = styled.h1`
    position: sticky;
    top: 0;
    background: white;
    display: block;
    width: 100%;
    padding: ${({ theme: { settings } }) => settings.history.title.padding};
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { settings } }) => settings.history.list.gap};
    font-size: ${({ theme: { settings } }) => settings.font.main};
    font-weight: bold;
`;

export const ListItem = styled.li`
    border-top: 1px solid ${({ theme: { background } }) => background.secondary};
    padding: ${({ theme: { settings } }) => settings.history.ListItem.padding};
    text-align: center;
`;
