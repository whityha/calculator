import CalculatorCommand from '@command/CalculatorCommand';

import makeNumber from './makeNumber';

export default (expression) => {
    let calculatorCommand = false;

    const operandStack = [];
    const commandsStack = [];

    const commandsStackIsEmpty = () => commandsStack.length === 0;
    const getLastOperand = () => operandStack.splice(-1)[0];
    const getLastCommand = () => commandsStack.pop();
    const showLastCommand = () => commandsStack[commandsStack.length - 1];
    const priorityLastElement = () => {
        const last = commandsStack[commandsStack.length - 1];
        return typeof last === 'object' ? last.priority : -10;
    };

    const getResultLastCommand = () => {
        const Command = getLastCommand().command;
        const currentCommand = new Command(getLastOperand());
        if (!calculatorCommand)
            calculatorCommand = new CalculatorCommand(getLastOperand());
        return calculatorCommand.execute(currentCommand);
    };

    const checkItem = (item) => {
        if (typeof item === 'object') {
            if (
                commandsStackIsEmpty() ||
                item.priority > priorityLastElement()
            ) {
                commandsStack.push(item);
            } else {
                getResultLastCommand();
                checkItem(item);
            }
            return;
        }
        if (typeof item === 'string') {
            if (item === '(') {
                commandsStack.push(item);
                return;
            }
            if (item === ')') {
                while (showLastCommand() !== '(') {
                    getResultLastCommand();
                }
                getLastCommand();
                return;
            }
            operandStack.push(makeNumber(item));
        }
    };
    expression.forEach((item) => {
        checkItem(item);
    });
    while (commandsStack.length) {
        getResultLastCommand();
    }
    return calculatorCommand.getResult();
};
