import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearHistory, clearAll } from '@actions/displayActions';
import TogglerDivide from './TogglerDivide';
import Button from './Button';

const StyledControlPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: controls;
    border-left: 2px solid ${({ theme }) => theme.background.secondary};
    border-right: 2px solid ${({ theme }) => theme.background.secondary};
    padding: 1rem;
    gap: 2rem;
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.color.primary};
`;

const ControlPanel = () => {
    const dispatch = useDispatch();
    const clearHis = () => dispatch(clearHistory());
    const clear = () => dispatch(clearAll());
    return (
        <StyledControlPanel>
            <Title>Controls</Title>
            <TogglerDivide />
            <Button onClick={clearHis}>Clear history</Button>
            <Button onClick={clear}>Clear ALL</Button>
        </StyledControlPanel>
    );
};

export default ControlPanel;
