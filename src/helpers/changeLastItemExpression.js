const changeValue = (value, currentValue = '') => {
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

export default (value, expression) => {
    const lastExpressionItem = expression[expression.length - 1];
    const deleteLastItem = () => {
        expression.pop();
    };
    const addItemInExpression = (item) => {
        expression.push(item.toString());
    };

    let resultCurrent = '';
    if (lastExpressionItem && !Number.isNaN(Number(lastExpressionItem))) {
        deleteLastItem(expression);
        resultCurrent = changeValue(value, lastExpressionItem);
        addItemInExpression(resultCurrent);
        return resultCurrent;
    }
    if (
        lastExpressionItem &&
        (lastExpressionItem === '.' || lastExpressionItem === '-.')
    ) {
        deleteLastItem(expression);
        resultCurrent = changeValue(value, lastExpressionItem);
        addItemInExpression(resultCurrent);
        return resultCurrent;
    }
    resultCurrent = changeValue(value, '');
    addItemInExpression(resultCurrent);
    return value;
};
