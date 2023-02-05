import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    grid-area: history;
    border-left: 2px solid ${({ theme }) => theme.background.secondary};
    padding: 1rem;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.5rem;
    font-weight: bold;
`;

const StyledListItem = styled.li`
    border-top: 1px solid ${({ theme }) => theme.background.secondary};
    padding: 5px;
`;

const History = () => {
    const formulas = useSelector(({ display }) => display.formulas);
    return (
        <StyledHistory>
            <h1>History</h1>
            <StyledList>
                {formulas.map(({ formula, id }) => (
                    <StyledListItem key={id}>{formula}</StyledListItem>
                ))}
            </StyledList>
        </StyledHistory>
    );
};

export default History;
