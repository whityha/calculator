class CalculatorCommand {
    constructor() {
        this.current = '';
        this.result = 0;

        this.wasEqual = false;
        this.canEqual = false;
        this.isRegistered = false;
        this.isExpression = false;

        this.history = [];
        this.formula = [];

        this.operandStack = [];
        this.operatorStack = [];

        this.openBracketCount = 0;
    }

    equal(callback = false) {
        if (this.wasEqual) return this.current;
        if (this.isRegistered) return this.getHistoryDisplay();
        if (!this.canEqual) return this.getHistoryDisplay() || '0';
        this.checkLastHistoryItem();

        while (this.openBracketCount) {
            this.addItemInFormula(')');
            this.addItemInHistory(')');
            this.openBracketCount -= 1;
        }

        this.history.push('=');
        this.getResult();
        this.wasEqual = true;

        if (callback) callback(this.current);

        this.clear();

        return this.current;
    }

    changeSign() {
        if (
            !Number.isNaN(Number(this.getLastHistoryItem())) ||
            this.getLastHistoryItem() === '.' ||
            this.getLastHistoryItem() === '-.'
        ) {
            this.history.pop();
            this.formula.pop();
        }
        this.current =
            this.current.indexOf('-') === -1
                ? `-${this.current}`
                : this.current.slice(1);
        this.addItemInFormula(this.getCurrent('number'));
        this.addItemInHistory(this.getCurrent('string'));

        return this.current;
    }

    getLastHistoryItem() {
        return this.history[this.history.length - 1];
    }

    addItemInFormula(item) {
        this.formula.push(item);
    }

    addItemInHistory(item) {
        this.history.push(item);
    }

    operatorStackIsEmpty() {
        return this.operatorStack.length === 0;
    }

    lastOperatorPriority() {
        const last = this.operatorStack[this.operatorStack.length - 1];
        return typeof last === 'object' ? last.priority : -10;
    }

    getTwoLastOperand() {
        return this.operandStack.splice(-2);
    }

    getLastOperator() {
        return this.operatorStack.pop();
    }

    showLastOperator() {
        return this.operatorStack[this.operatorStack.length - 1];
    }

    getResultLastCommand() {
        return this.getLastOperator().execute(this.getTwoLastOperand());
    }

    getHistoryDisplay() {
        return this.history.join(' ');
    }

    getResult() {
        this.checkLastHistoryItem();
        this.formula.forEach((item) => {
            const checkItem = () => {
                switch (typeof item) {
                    case 'object':
                        if (
                            this.operatorStackIsEmpty() ||
                            item.priority > this.lastOperatorPriority()
                        ) {
                            this.operatorStack.push(item);
                        } else {
                            this.operandStack.push(this.getResultLastCommand());
                            checkItem();
                        }
                        break;
                    case 'string':
                        if (item === '(') {
                            this.operatorStack.push(item);
                        }
                        if (item === ')') {
                            while (this.showLastOperator() !== '(') {
                                this.operandStack.push(
                                    this.getResultLastCommand()
                                );
                            }
                            this.getLastOperator();
                        }
                        break;
                    default:
                        this.operandStack.push(item);
                        break;
                }
            };

            checkItem();
        });
        while (this.operatorStack.length) {
            this.operandStack.push(this.getResultLastCommand());
        }
        this.result = this.operandStack.pop();
        this.current = this.result.toString();
        return this.result;
    }

    openBracket() {
        this.addItemInFormula('(');
        this.addItemInHistory('(');
        this.openBracketCount += 1;
    }

    closeBracket() {
        this.addItemInHistory(')');
        this.addItemInFormula(')');
        this.openBracketCount -= 1;
    }

    changeCurrentValue(digit) {
        const hasDot = this.current.indexOf('.') !== -1;
        if (digit !== '.') this.checkLastHistoryItem();

        if (digit === '0') {
            if (this.current === '') {
                this.current = '0';
                this.addItemInFormula(this.getCurrent('number'));
                this.addItemInHistory(this.getCurrent('string'));
                this.isRegistered = false;
                return;
            }
            if (hasDot || Math.abs(this.getCurrent('number')) > 0) {
                this.history.pop();
                this.formula.pop();
                this.current += digit;
            } else {
                return;
            }
        } else if (digit === '.') {
            if (!hasDot && this.current !== '') {
                this.history.pop();
                this.formula.pop();
                this.current = `${this.current}.`;
            } else if (this.current === '') {
                this.current = `.`;
            } else {
                return;
            }
        } else if (!Number.isNaN(Number(this.getLastHistoryItem()))) {
            this.history.pop();
            this.formula.pop();
            this.current += digit;
        } else if (this.getLastHistoryItem() === 0) {
            this.history.pop();
            this.formula.pop();
            this.current = digit;
        } else {
            this.current = digit;
        }
        this.addItemInFormula(this.getCurrent('number'));
        this.addItemInHistory(this.getCurrent('string'));

        this.isRegistered = false;
    }

    registerCommand(command) {
        if (this.isRegistered) return false;
        this.checkLastHistoryItem();

        if (this.formula.length === 0) {
            this.addItemInFormula(Number(this.current));
            this.addItemInHistory(Number(this.current));
        }
        this.isRegistered = true;
        this.wasEqual = false;
        this.canEqual = true;
        this.addItemInFormula(command);
        this.addItemInHistory(command.getSign());
        this.clearCurrent();
        return true;
    }

    checkLastHistoryItem() {
        if (this.getLastHistoryItem() === '.') {
            this.history[this.history.length - 1] = '0';
        } else if (this.getLastHistoryItem() === '-.') {
            this.history[this.history.length - 1] = '-0';
        }
    }

    clear() {
        this.clearHistory();
        this.clearFormula();
        this.result = 0;
        this.isRegistered = false;
        this.isEqual = false;
        this.canEqual = false;
    }

    clearCurrent() {
        this.current = '';
    }

    clearFormula() {
        this.formula = [];
    }

    clearHistory() {
        this.history = [];
    }

    getCurrent(type) {
        switch (type) {
            case 'number':
                return this.current === '.' || this.current === '-.'
                    ? 0
                    : Number(this.current);
            case 'string':
                return this.current;
            default:
                return this.current;
        }
    }
}

const calc = new CalculatorCommand(0);

export default calc;
