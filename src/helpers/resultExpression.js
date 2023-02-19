export default (expression) => {
    const operandStack = [];
    const operatorStack = [];
    const operatorStackIsEmpty = () => operatorStack.length === 0;
    const getTwoLastOperand = () => operandStack.splice(-2);
    const getLastOperator = () => operatorStack.pop();
    const showLastOperator = () => operatorStack[operatorStack.length - 1];
    const priorityLastElement = () => {
        const last = operatorStack[operatorStack.length - 1];
        return typeof last === 'object' ? last.priority : -10;
    };
    const getResultLastCommand = () =>
        getLastOperator().execute(getTwoLastOperand());
    const checkItem = (item) => {
        if (typeof item === 'object') {
            if (
                operatorStackIsEmpty() ||
                item.priority > priorityLastElement()
            ) {
                operatorStack.push(item);
            } else {
                operandStack.push(getResultLastCommand());
                checkItem(item);
            }
            return;
        }
        if (typeof item === 'string') {
            if (item === '(') {
                operatorStack.push(item);
            }
            if (item === ')') {
                while (showLastOperator() !== '(') {
                    operandStack.push(getResultLastCommand());
                }
                getLastOperator();
            }
            return;
        }
        operandStack.push(item);
    };
    expression.forEach((item) => {
        checkItem(item);
    });
    while (operatorStack.length) {
        operandStack.push(getResultLastCommand());
    }
    return operandStack.pop();
};
