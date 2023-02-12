import React from 'react';

import Display from '../Display/Display/DisplayCC';
import Keypad from '../Keypad/Keypad/KeypadCC';

class Calculator extends React.Component {
    render() {
        return (
            <>
                <Display />
                <Keypad />
            </>
        );
    }
}

export default Calculator;
