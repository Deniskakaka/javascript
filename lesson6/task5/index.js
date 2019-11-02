function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let mas = [];
    for (let i = 0; i < arr.length; i++) {
        mas.push(arr[i] * arr[i]);
    };
    return mas;
};