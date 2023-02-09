import { clearAll, clearHistory } from '@actions/displayActions';
import {
    StyledControlPanel,
    Title,
} from '@styles/ControlPanel/ControlPanel/style';
import React from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';
import TogglerDivide from './TogglerDivide';

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
