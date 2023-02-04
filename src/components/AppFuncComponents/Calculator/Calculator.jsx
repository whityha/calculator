import React from 'react';
import { useDispatch } from 'react-redux';
import {
    drawDisplay,
    clear,
    drawHistoryDisplay,
    changeSign,
} from '@actions/displayActions';
import { calc } from '@command/command';
import {
    DRAW_HISTORY,
    DRAW,
    CLEAR_DISPLAY,
    CLEAR_DISPLAY_ALL,
    CHANGE_SIGN,
} from '@constants/options';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import ControlPanel from '../ControlPanel/ControlPanel';
import History from '../History/History';

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
        if (CLEAR_DISPLAY.includes(name))
            return () => dispatch(clear({ deep: 'display' }));
        if (CLEAR_DISPLAY_ALL.includes(name))
            return () => dispatch(clear({ deep: 'displayAll' }));
        if (CHANGE_SIGN.includes(name))
            return () => {
                dispatch(changeSign(name));
            };
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
