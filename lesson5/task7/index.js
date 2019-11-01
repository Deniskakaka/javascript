function increaser(a, index) {
    if (index < a) {
        return a * index;
    }
    if (!isInteger(index) || !isInteger(a)) {
        return false;
    }
    if (index > a) {
        return a;
    }
}