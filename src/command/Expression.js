import { PRIORITY } from '@constants/options';

export default class Expression {
    constructor() {
        this.result = 0;
        this.current = '';

        this.formulaArray = [];
        this.formulaDisplay = [];

        this.isSuccess = false;
        this.isRegistered = false;
        this.isClosed = false;
    }

    getFormulaDisplay() {
        return this.formulaDisplay.join(' ');
    }

    start(value) {
        this.current = value || '';
        this.formulaArray.push('bl');
        this.formulaDisplay.push('(');
    }

    register() {
        this.isRegistered = true;
    }

    unregister() {
        this.isRegistered = false;
    }

    getCurrent() {
        if (this.current === '.') return 0;
        return this.current;
    }

    registerOperator(operatorName, operatorSign) {
        this.register();
        this.formulaDisplay.push(this.getCurrent(), operatorSign);
        if (this.current) this.formulaArray.push(Number(this.getCurrent()));
        this.formulaArray.push(operatorName);
        this.current = '';
    }

    addCurrentInArray() {
        if (this.current) this.formulaArray.push(Number(this.getCurrent()));
        this.formulaDisplay.push(this.getCurrent());
    }

    changeSign() {
        const condition = this.current.indexOf('-') === -1;
        this.current = condition ? `-${this.current}` : this.current.slice(1);
    }

    changeCurrent(digit) {
        this.unregister();
        switch (digit) {
            case '0':
                if (this.current === '-') this.current = `-0`;
                else if (Number(this.current) === 0) this.current = '0';
                else if (Number(this.current) > 0) this.current += '0';
                break;
            case '.':
                if (this.current.indexOf('.') === -1) this.current += digit;
                break;
            default:
                if (this.current === '0') this.current = digit;
                if (this.current === '-0') this.current = `-${digit}`;
                else this.current += digit;
        }
    }

    equal() {
        let result = null;
        try {
            result = this.calculate();
        } catch (e) {
            result = null;
        }
        if (result && result.operatorStack.length === 0) {
            this.isSuccess = true;
            const { operandStack } = result;
            [this.result] = operandStack;
        }
    }

    calculate() {
        this.operandStack = [];
        this.operatorStack = [];
        const lastOperator = () =>
            this.operatorStack[this.operatorStack.length - 1];
        const getResult = (action) => {
            const lastOperands = this.operandStack.splice(-2);
            switch (action) {
                case 'multiply':
                    return Number(
                        (lastOperands[0] * lastOperands[1]).toFixed(3)
                    );
                case 'divide':
                    return Number(
                        (lastOperands[0] / lastOperands[1]).toFixed(3)
                    );
                case 'plus':
                    return Number(
                        (lastOperands[0] + lastOperands[1]).toFixed(3)
                    );
                case 'minus':
                    return Number(
                        (lastOperands[0] - lastOperands[1]).toFixed(3)
                    );
                case 'remainder':
                    return Number(
                        (lastOperands[0] % lastOperands[1]).toFixed(3)
                    );
                default:
                    return null;
            }
        };
        this.formulaArray.forEach((item, _, array) => {
            const checkStack = () => {
                const bracketsCondition = lastOperator() === 'bl';
                const lengthCondition = this.operatorStack.length === 0;
                switch (item) {
                    case 'bl':
                        this.operatorStack.push(item);
                        break;
                    case 'br':
                        if (lastOperator() !== 'bl') {
                            this.operandStack.push(getResult(lastOperator()));
                            this.operatorStack.pop();
                            checkStack();
                        } else if (lastOperator() === 'bl')
                            this.operatorStack.pop();
                        break;
                    case 'multiply':
                    case 'divide':
                    case 'remainder':
                        if (bracketsCondition) {
                            this.operatorStack.push(item);
                        } else if (lengthCondition) {
                            this.operatorStack.push(item);
                        } else if (PRIORITY[item] > PRIORITY[lastOperator()]) {
                            this.operatorStack.push(item);
                        } else if (PRIORITY[item] <= PRIORITY[lastOperator()]) {
                            this.operandStack.push(getResult(lastOperator()));
                            this.operatorStack.pop();
                            this.operatorStack.push(item);
                        }
                        break;
                    case 'plus':
                    case 'minus':
                        if (bracketsCondition) {
                            this.operatorStack.push(item);
                        } else if (lengthCondition) {
                            this.operatorStack.push(item);
                        } else if (PRIORITY[item] <= PRIORITY[lastOperator()]) {
                            this.operandStack.push(getResult(lastOperator()));
                            this.operatorStack.pop();
                            this.operatorStack.push(item);
                        }
                        break;
                    default:
                        this.operandStack.push(item);
                        break;
                }
                if (
                    item === array[array.length - 1] &&
                    this.operatorStack.length > 0
                ) {
                    this.operandStack.push(getResult(lastOperator()));
                    this.operatorStack.pop();
                }
            };
            checkStack();
        });
        return {
            operandStack: this.operandStack,
            operatorStack: this.operatorStack,
        };
    }
}
