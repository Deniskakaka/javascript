function squareElements(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let copy = [...arr]
    return copy.map(i => { return i * i });
};