function getTotalPrice(arr) {
    let count = arr.reduce((acc, number) => {
        return acc + Number(number.toFixed(2));
    }, 0);
    return '$' + Number(count.toFixed(2));
};

console.log(getTotalPrice([1.123, 1.6754, 1.9943, 5.333]));