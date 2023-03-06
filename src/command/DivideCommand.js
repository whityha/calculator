export default class DivideCommand {
    constructor(valueToDivide) {
        this.value = valueToDivide;
    }

    execute(value) {
        const res = value / this.value;
        const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
        return res % 1 ? Number(fixed) : res;
    }
}
