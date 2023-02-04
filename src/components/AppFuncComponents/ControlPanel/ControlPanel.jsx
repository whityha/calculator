import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import TogglerDivide from './TogglerDivide';
import Button from './Button';
import { clear } from '../../../store/actions/displayActions';

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

const Title = styled.h1`
    color: ${(props) => props.theme.color.primary};
`;

const ControlPanel = () => {
    const dispatch = useDispatch();
    const clearHistory = () => dispatch(clear({ deep: 'clearHistory' }));
    const clearAll = () => dispatch(clear({ deep: 'deep' }));
    return (
        <StyledControlPanel>
            <Title>Controls</Title>
            <TogglerDivide />
            <Button onClick={clearHistory}>Clear history</Button>
            <Button onClick={clearAll}>Clear ALL</Button>
        </StyledControlPanel>
    );
};

export default ControlPanel;
