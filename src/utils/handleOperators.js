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

const handleOperators = (calc, name, dispatch) => {
    switch (name) {
        case 'plus':
            doOperation(calc, new AddCommand(), dispatch);
            break;
        case 'minus':
            doOperation(calc, new SubtractCommand(), dispatch);
            break;
        case 'multiply':
            doOperation(calc, new MultiplyCommand(), dispatch);
            break;
        case 'divide':
            doOperation(calc, new DivideCommand(), dispatch);
            break;
        case 'remainder':
            doOperation(calc, new RemainderCommand(), dispatch);
            break;
        case 'equal': {
            const { expression, result } = calc.equal();
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
