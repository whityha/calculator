const changeSign = (item) =>
    item.indexOf('-') === -1 ? `-${item}` : item.slice(1);

const preparationItem = (item) => {
    if (item === '.') return 0;
    if (item === '-.') return -0;
    return Number(item);
};

export default (item, history, expression) => {
    if (!item) return false;
    if (!Number.isNaN(Number(item)) || item === '.' || item === '-.') {
        history.pop();
        expression.pop();
    }
    item = changeSign(item);
    history.push(item.toString());
    expression.push(preparationItem(item));
    return item;
};
