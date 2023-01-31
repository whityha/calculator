import React from 'react';
import styled from 'styled-components';

const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: history;
    border-left: 2px solid white;
    padding: 1rem;
`;

const History = () => {
    return (
        <StyledHistory>
            <h1>History</h1>
        </StyledHistory>
    );
};

export default History;
