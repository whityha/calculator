export default class CalculatorCommand {
    constructor(initialValue) {
        this.result = initialValue;
    }

    execute(command) {
        this.result = command.execute(this.result);
        return this.result;
    }

    getResult() {
        return this.result;
    }
}
