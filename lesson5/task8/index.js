function compareSums(a, b, c, d) {
    return sum(a, b, c, d)
};

function sum(from, to) {
    from = arguments[0] + arguments[1];
    to = arguments[2] + arguments[3];
    if (from > to) {
        console.log(true);
    } else {
        console.log(false);
    }
}