export default class AddCommand {
    constructor(valueToAdd) {
        this.value = Number(valueToAdd);
        this.priority = 1;
        this.sign = '+';
    }

    execute(items) {
        if (this.currentValue) return this;
        const [num1, num2] = items;
        const res = num1 + num2;
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
