function flatArray(arr) {
    let mas = [];
    arr.forEach(i => {
        mas = mas.concat(i)
    });
    return mas;
};