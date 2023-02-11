import React from 'react';
import { useDispatch } from 'react-redux';
import {
    clearDisplay,
    drawDisplay,
    drawHistoryDisplay,
} from '@actions/displayActions';
import AddCommand from '@command/AddCommand';
import calc from '@command/command';
import DivideCommand from '@command/DivideCommand';
import MultiplyCommand from '@command/MultiplyCommand';
import RemainderCommand from '@command/ReminderCommand';
import SubtractCommand from '@command/SubtractCommand';
import {
    CHANGE_SIGN,
    CLEAR,
    DRAW_BUTTONS,
    DRAW_HISTORY_BUTTONS,
} from '@constants/options';

import Display from '../Display/Display/DisplayFC';
import Keypad from '../Keypad/Keypad/KeypadFC';

const Calculator = () => {
    const dispatch = useDispatch();

    const controller = (digit, name) => () => {
        if (name === 'bl') {
            if (!calc.isRegistered && calc.current) {
                calc.registerCommand(new MultiplyCommand());
            }
            calc.openBracket();
            calc.isRegistered = true;
            dispatch(drawDisplay(calc.getHistoryDisplay()));
            dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
        }
        if (name === 'br') {
            if (calc.openBracketCount && !calc.isRegistered) {
                calc.closeBracket();
                dispatch(drawDisplay(calc.getHistoryDisplay()));
                dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
            }
        }
        if (DRAW_BUTTONS.includes(name)) {
            if (calc.getLastHistoryItem() !== ')')
                calc.changeCurrentValue(digit);
            dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
            dispatch(drawDisplay(calc.getHistoryDisplay()));
        }
        if (CHANGE_SIGN.includes(name)) {
            calc.changeSign();
            dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
            dispatch(drawDisplay(calc.getHistoryDisplay()));
        }
        if (DRAW_HISTORY_BUTTONS.includes(name)) {
            let result;
            switch (name) {
                case 'plus':
                    calc.registerCommand(new AddCommand());
                    break;
                case 'minus':
                    calc.registerCommand(new SubtractCommand());
                    break;
                case 'multiply':
                    calc.registerCommand(new MultiplyCommand());
                    break;
                case 'divide':
                    calc.registerCommand(new DivideCommand());
                    break;
                case 'remainder':
                    calc.registerCommand(new RemainderCommand());
                    break;
                case 'equal':
                    result = calc.equal(() => {
                        dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
                    });
                    dispatch(drawDisplay(result));
                    break;
                default:
                    break;
            }
            switch (name) {
                case 'plus':
                case 'minus':
                case 'multiply':
                case 'divide':
                case 'remainder':
                    dispatch(drawHistoryDisplay(calc.getHistoryDisplay()));
                    dispatch(drawDisplay(calc.getHistoryDisplay()));
                    break;
                default:
                    break;
            }
        }
        if (CLEAR.includes(name)) {
            calc.clear();
            calc.clearCurrent();
            dispatch(clearDisplay());
        }
    };

    return (
        <>
            <Display />
            <Keypad handle={controller} />
        </>
    );
};

export default Calculator;
