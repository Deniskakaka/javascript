function compareSums(a, b, c, d) {
    return sum(a, b, c, d)
};

function sum() {
    from = arguments[0] + arguments[1];
    to = arguments[2] + arguments[3];
    if (from > to) {
        return true;
    } else {
        return false;
    }
}