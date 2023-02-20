const changeCurrentValue = (value, currentValue = '0') => {
    const containsDot = currentValue.indexOf('.') !== -1;
    let resultValue = currentValue;
    switch (value) {
        case '0':
            if (currentValue === '0') {
                return resultValue;
            }
            if (Math.abs(Number(currentValue)) !== 0 || containsDot) {
                resultValue = currentValue + value;
                return resultValue;
            }
            return resultValue || '0';
        case '.':
            if (!containsDot) {
                resultValue = currentValue + value;
                return resultValue;
            }
            return currentValue;
        default:
            if (currentValue === '0') resultValue = value;
            else resultValue += value;

            return resultValue;
    }
};

export default (value, expression) => {
    const lastExpressionItem = expression[expression.length - 1];
    const isNumberLastItem = !Number.isNaN(Number(lastExpressionItem));

    const deleteLastItem = () => {
        expression.pop();
    };
    const addItemInExpression = (item) => {
        expression.push(item.toString());
    };

    let resultCurrent = '';
    if (
        lastExpressionItem &&
        (isNumberLastItem ||
            lastExpressionItem === '.' ||
            lastExpressionItem === '-.')
    ) {
        deleteLastItem(expression);
        resultCurrent = changeCurrentValue(value, lastExpressionItem);
        addItemInExpression(resultCurrent);
        return resultCurrent;
    }
    resultCurrent = changeCurrentValue(value, '');
    addItemInExpression(resultCurrent);
    return value;
};
