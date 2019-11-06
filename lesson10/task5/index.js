function getTotalPrice(arr) {
    let sum = 0;
    arr.forEach(i => {
        sum += Number(i.toFixed(2));
    });
    let string = '$' + Math.round(sum).toFixed(2);
    return string;
};

console.log(getTotalPrice([1.123, 1.6754, 1.9943, 5.333]));