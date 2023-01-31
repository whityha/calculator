import React from 'react';
// import styled from 'styled-components';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import ControlPanel from '../ControlPanel/ControlPanel';
import History from '../History/History';

// const GridCalculator = styled.div`
// `;

const Calculator = () => {
    return (
        <>
            <Display />
            <Keypad />
            <ControlPanel />
            <History />
        </>
    );
};

export default Calculator;
