function getTotalPrice(arr) {
    let sum = 0;
    sum = arr.reduce((acc, number) => {
        return acc += num;
    });
    return '$' + Math.floor(sum * 100) / 100;
};