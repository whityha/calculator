export default class MultiplyCommand {
    constructor(valueToMultiply) {
        this.value = valueToMultiply;
        this.currentValue = null;
        this.dig = ' × ';
    }

    execute(currentValue) {
        this.currentValue = currentValue;
        const res = this.value * currentValue;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getStory() {
        return `${this.value} × ${this.currentValue}`;
    }
}
