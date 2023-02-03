import React from 'react';
import styled from 'styled-components';
import TogglerDivide from './TogglerDivide';
import ClearButton from './ClearButton';

const StyledControlPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: controls;
    border-left: 2px solid white;
    border-right: 2px solid white;
    padding: 1rem;
    gap: 2rem;
`;

const ControlPanel = () => {
    return (
        <StyledControlPanel>
            <h1>Controls</h1>
            <TogglerDivide />
            <ClearButton />
        </StyledControlPanel>
    );
};

export default ControlPanel;
