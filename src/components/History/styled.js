import styled from 'styled-components';

export const WrapperHistory = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    grid-area: history;
    border-left: 2px solid
        ${({ theme: { background } }) => background.secondary};
    padding: 0 20px 50px 20px;
    overflow-y: auto;
`;

export const Title = styled.h1`
    position: sticky;
    top: 0;
    background: white;
    display: block;
    width: 100%;
    padding: 30px 30px;
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const ListItem = styled.li`
    border-top: 1px solid ${({ theme: { background } }) => background.secondary};
    padding: 5px;
    text-align: center;
`;
