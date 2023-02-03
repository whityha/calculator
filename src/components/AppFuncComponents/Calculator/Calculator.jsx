import React from 'react';
import { useDispatch } from 'react-redux';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import ControlPanel from '../ControlPanel/ControlPanel';
import History from '../History/History';
import { calc } from '../../../command/command';
import { DRAW_HISTORY, DRAW } from '../../../constants/buttons';
import {
    drawDisplay,
    clear,
    drawHistoryDisplay,
} from '../../../store/actions/displayActions';

const Calculator = () => {
    const dispatch = useDispatch();
    const handleDisplay = (dig, name) => {
        if (DRAW.includes(name))
            return () =>
                dispatch(
                    drawDisplay({
                        name,
                        dig,
                    })
                );
        if (name === 'CE' || name === 'C') return () => dispatch(clear(dig));

        if (DRAW_HISTORY.includes(name))
            return () => {
                dispatch(
                    drawHistoryDisplay({
                        name,
                        dig,
                    })
                );
            };
        return () => {};
    };
    return (
        <>
            <Display />
            <Keypad handle={handleDisplay} calc={calc} />
            <ControlPanel />
            <History />
        </>
    );
};

export default Calculator;
