import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAll, clearHistory } from '@actions/displayActions';

import Button from '../Button/ButtonFC';
import TogglerDivide from '../TogglerDivide/TogglerDivideFC';

import { StyledControlPanel, Title } from './styled';

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
