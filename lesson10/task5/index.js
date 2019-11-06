function getTotalPrice(arr) {
    let sum = 0;
    sum = arr.reduce((acc, number) => {
        return acc += Number(number.toFixed(2));
    });
    return '$' + (sum).toFixed(2);
};

console.log(getTotalPrice([1.123, 1.6754, 1.9943, 5.333]));