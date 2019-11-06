function getTotalPrice(arr) {
    let sum = 0;
    sum = arr.reduce((acc, number) => {
        return acc += number;
    });
    return '$' + Math.floor(sum * 100) / 100;
};