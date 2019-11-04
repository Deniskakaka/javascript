function squareElements(arr) {
    if (!Array.isArray(arr)) {
        return null;
    } else {
        let copy = [...arr]
        return copy.map(i => { return i * i });
    }
};

squareElements([2, 2, 2])