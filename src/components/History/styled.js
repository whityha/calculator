import styled from 'styled-components';

export const WrapperHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    grid-area: history;
    border-left: 2px solid
        ${({ theme: { background } }) => background.secondary};
    padding: 1rem;
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
`;
