export default class SubtractCommand {
    constructor(valueToSubtract) {
        this.value = valueToSubtract;
        this.currentValue = null;
        this.sign = '-';
        this.priority = 1;
    }

    execute(items) {
        if (this.currentValue) return this;
        const [num1, num2] = items;
        const res = num1 - num2;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }

    getSign() {
        return this.sign;
    }

    getName() {
        return this.name;
    }
}
