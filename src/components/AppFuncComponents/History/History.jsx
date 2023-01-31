import React from 'react';
import styled from 'styled-components';

const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    grid-area: history;
    border-left: 2px solid white;
    padding: 1rem;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.5rem;
    font-weight: bold;
`;

const History = () => {
    return (
        <StyledHistory>
            <h1>History</h1>
            <StyledList>
                <li>199 / 3</li>
                <li>300 + 1</li>
                <li>33344 * 2</li>
            </StyledList>
        </StyledHistory>
    );
};

export default History;
