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

export default (digit, formula, history) => {
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
