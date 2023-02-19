import {
    addItemInHistoryList,
    setDisplayValue,
    setHistoryDisplayValue,
} from '@actions/display';
import AddCommand from '@command/AddCommand';
import DivideCommand from '@command/DivideCommand';
import MultiplyCommand from '@command/MultiplyCommand';
import RemainderCommand from '@command/ReminderCommand';
import SubtractCommand from '@command/SubtractCommand';

import calc from './Calculator';

const handleOperators = (name, dispatch) => {
    switch (name) {
        case 'plus':
            calc.appendCommand(new AddCommand());
            break;
        case 'minus':
            calc.appendCommand(new SubtractCommand());
            break;
        case 'multiply':
            calc.appendCommand(new MultiplyCommand());
            break;
        case 'divide':
            calc.appendCommand(new DivideCommand());
            break;
        case 'remainder':
            calc.appendCommand(new RemainderCommand());
            break;
        case 'equal':
            calc.equal((expressionResult) => {
                dispatch(setHistoryDisplayValue(calc.getHistoryDisplay()));
                dispatch(
                    addItemInHistoryList({
                        expression: `${calc.getHistoryDisplay()} ${expressionResult}`,
                        id: Math.random(),
                    })
                );
                dispatch(setDisplayValue(expressionResult));
            });

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
            // dispatch(setHistoryDisplayValue(calc.getHistoryDisplay()));
            dispatch(setDisplayValue(calc.getHistoryDisplay()));
            break;
        default:
            break;
    }
};

export default handleOperators;
