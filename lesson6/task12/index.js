function cloneArr(arr) {
    let mas = [];
    for (let i = 0; i < arr.length; i++) {
        mas.unshift(arr[i]);
    }
    return mas;
};