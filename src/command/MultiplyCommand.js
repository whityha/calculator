export default class MultiplyCommand {
    constructor(valueToMultiply) {
        this.value = valueToMultiply;
        this.currentValue = null;
        this.priority = 2;
        this.dig = '×';
        this.name = 'multiply';
    }

    execute(items) {
        if (this.currentValue) return this;
        const [num1, num2] = items;
        const res = num1 * num2;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getSign() {
        return this.dig;
    }

    getName() {
        return this.name;
    }
}
