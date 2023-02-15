export default (formula) => {
    const operandStack = [];
    const operatorStack = [];
    const operatorStackIsEmpty = () => operatorStack.length === 0;
    const getTwoLastOperand = () => operandStack.splice(-2);
    const getLastOperator = () => operatorStack.pop();
    const showLastOperator = () => operatorStack[operatorStack.length - 1];
    const lastOperatorPriority = () => {
        const last = operatorStack[operatorStack.length - 1];
        return typeof last === 'object' ? last.priority : -10;
    };
    const getResultLastCommand = () =>
        getLastOperator().execute(getTwoLastOperand());

    formula.forEach((item) => {
        const checkItem = () => {
            switch (typeof item) {
                case 'object':
                    if (
                        operatorStackIsEmpty() ||
                        item.priority > lastOperatorPriority()
                    ) {
                        operatorStack.push(item);
                    } else {
                        operandStack.push(getResultLastCommand());
                        checkItem();
                    }
                    break;
                case 'string':
                    if (item === '(') {
                        operatorStack.push(item);
                    }
                    if (item === ')') {
                        while (showLastOperator() !== '(') {
                            operandStack.push(getResultLastCommand());
                        }
                        getLastOperator();
                    }
                    break;
                default:
                    operandStack.push(item);
                    break;
            }
        };

        checkItem();
    });
    while (operatorStack.length) {
        operandStack.push(getResultLastCommand());
    }
    return operandStack.pop();
};
