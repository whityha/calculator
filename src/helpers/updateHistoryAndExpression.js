const changeCurrentValue = (value, currentValue = '') => {
    const containsDot = currentValue.toString().indexOf('.') !== -1;
    let resultCurrent = currentValue.toString();
    switch (value) {
        case '0':
            if (currentValue === '') {
                resultCurrent = '0';
                return resultCurrent;
            }
            if (Math.abs(Number(currentValue)) !== 0 || containsDot) {
                resultCurrent = currentValue + value;
                return resultCurrent;
            }
            return resultCurrent;
        case '.':
            if (!containsDot) {
                resultCurrent = currentValue + value;
                return resultCurrent;
            }
            return currentValue;
        default:
            resultCurrent += value;

            return resultCurrent;
    }
};

export default (value, expression, history) => {
    const currentValue = history[history.length - 1];
    const deleteLastItem = (...args) => {
        args.forEach((item) => item.pop());
    };
    const checkBeforePushInExpression = (string) => {
        if (string === '.') return 0;
        if (string === '-.') return 0;
        return Number(string);
    };
    const addInHistoryAndExpression = (item) => {
        history.push(item.toString());
        expression.push(checkBeforePushInExpression(item));
    };

    let resultCurrent = '';
    if (currentValue && !Number.isNaN(Number(currentValue))) {
        deleteLastItem(expression, history);
        resultCurrent = changeCurrentValue(value, currentValue);
        addInHistoryAndExpression(resultCurrent);
        return resultCurrent;
    }
    if (currentValue && (currentValue === '.' || currentValue === '-.')) {
        deleteLastItem(expression, history);
        resultCurrent = changeCurrentValue(value, currentValue);
        addInHistoryAndExpression(resultCurrent);
        return resultCurrent;
    }
    resultCurrent = changeCurrentValue(value, '');
    addInHistoryAndExpression(resultCurrent);
    return value;
};
