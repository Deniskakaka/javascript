function getArrayBounds(arr) {
    if (Array.isArray(arr)) {
        let mas = [arr.length, arr[0], arr.length - 1];
        return mas;
    } else {
        return null;
    }

};