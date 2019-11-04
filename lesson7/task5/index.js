function squareElements(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let copy = [...arr]
    copy.map(i => { return i * i });
    return copy;
};