// eslint-disable-next-line import/prefer-default-export
const changeSign = (item) =>
    item.indexOf('-') === -1 ? `-${item}` : item.slice(1);

const restoreDotItem = (item) => {
    if (item === '.') return 0;
    if (item === '-.') return -0;
    return Number(item);
};

export const changeSignCurrent = (item, history, formula) => {
    if (!item) return false;
    if (!Number.isNaN(Number(item)) || item === '.' || item === '-.') {
        history.pop();
        formula.pop();
    }
    item = changeSign(item);
    history.push(item.toString());
    formula.push(restoreDotItem(item));
    return item;
};

export const result = (formula) => {
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

const changeDigitCurrent = (digit, current = '') => {
    const hasDot = current.toString().indexOf('.') !== -1;
    let resultCurrent = current.toString();
    switch (digit) {
        case '0':
            if (current === '') {
                resultCurrent = '0';
                return resultCurrent;
            }
            if (Math.abs(Number(current)) !== 0 || hasDot) {
                resultCurrent = current + digit;
                return resultCurrent;
            }
            return resultCurrent;
        case '.':
            if (!hasDot) {
                resultCurrent = current + digit;
                return resultCurrent;
            }
            return current;
        default:
            resultCurrent += digit;

            return resultCurrent;
    }
};

export const updateHistoryAndFormula = (digit, formula, history) => {
    const current = history[history.length - 1];
    const deleteLastItem = () => {
        history.pop();
        formula.pop();
    };
    const checkBeforePushInFormula = (string) => {
        if (string === '.') return 0;
        if (string === '-.') return 0;
        return Number(string);
    };
    const addInHistory = (item) => {
        history.push(item.toString());
        formula.push(checkBeforePushInFormula(item));
    };

    let resultCurrent = '';
    if (current && !Number.isNaN(Number(current))) {
        deleteLastItem();
        resultCurrent = changeDigitCurrent(digit, current);
        addInHistory(resultCurrent);
        return resultCurrent;
    }
    if (current && (current === '.' || current === '-.')) {
        deleteLastItem();
        resultCurrent = changeDigitCurrent(digit, current);
        addInHistory(resultCurrent);
        return resultCurrent;
    }
    resultCurrent = changeDigitCurrent(digit, '');
    addInHistory(resultCurrent);
    return digit;
};
