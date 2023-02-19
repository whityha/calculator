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

const doOperation = (calculator, command, dispatch) => {
    calculator.appendCommand(command);
    dispatch(setDisplayValue(calculator.getExpressionDisplay()));
};

const handleOperators = (calculator, name, dispatch) => {
    switch (name) {
        case 'plus':
            doOperation(calculator, new AddCommand(), dispatch);
            break;
        case 'minus':
            doOperation(calculator, new SubtractCommand(), dispatch);
            break;
        case 'multiply':
            doOperation(calculator, new MultiplyCommand(), dispatch);
            break;
        case 'divide':
            doOperation(calculator, new DivideCommand(), dispatch);
            break;
        case 'remainder':
            doOperation(calculator, new RemainderCommand(), dispatch);
            break;
        case 'equal': {
            const { expression, result } = calculator.equal();
            dispatch(setHistoryDisplayValue(expression));
            dispatch(
                addItemInHistoryList({
                    expression: `${expression} ${result}`,
                    id: Math.random(),
                })
            );
            dispatch(setDisplayValue(result));
            break;
        }
        default:
            break;
    }
};

export default handleOperators;
