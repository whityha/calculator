import React from 'react';
import styled from 'styled-components';
import TogglerDivide from './TogglerDivide';
import ClearButton from './ClearButton';
import DeepClearButton from './DeepClearButton';

const StyledControlPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: controls;
    border-left: 2px solid ${(props) => props.theme.background.secondary};
    border-right: 2px solid ${(props) => props.theme.background.secondary};
    padding: 1rem;
    gap: 2rem;
`;

const ControlPanel = () => {
    return (
        <StyledControlPanel>
            <h1>Controls</h1>
            <TogglerDivide />
            <ClearButton />
            <DeepClearButton />
        </StyledControlPanel>
    );
};

export default ControlPanel;
