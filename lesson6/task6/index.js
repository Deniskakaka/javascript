function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let mas = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        mas.push(arr[i])
    }
    return mas;
};