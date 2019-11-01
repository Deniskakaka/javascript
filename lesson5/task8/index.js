function compareSums(a, b, c, d) {
    return function sum(from, to) {
        from = a + b;
        to = c + d;
        if (from > to) {
            return true;
        } else {
            return false;
        }
    }
}