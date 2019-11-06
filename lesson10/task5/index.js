function getTotalPrice(arr) {
    let sum = 0;
    arr = arr.map(i => {
        return Number(i.toFixed(2));
    });
    sum = arr.reduce((acc, number) => {
        return acc += number;
    });
    return '$' + sum.toFixed(2);
};

console.log(getTotalPrice([1.123, 1.6754, 1.9943, 5.333]));