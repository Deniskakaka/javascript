function increaser(a, index) {
    if (index < a) {
        return a;
    }
    if (!isInteger(index) || !isInteger(a)) {
        return false;
    } else {
        return a * index;
    }
}