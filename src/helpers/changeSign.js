const toggleSign = (item) =>
    item.indexOf('-') === -1 ? `-${item}` : item.slice(1);

export default (item, expression) => {
    if (!item) return false;
    if (!Number.isNaN(Number(item)) || item === '.' || item === '-.') {
        expression.pop();
    }
    item = toggleSign(item);
    expression.push(item);
    return item;
};
