function getTotalPrice(arr) {
    let count = 0;
    arr.forEach(i => {
        count += i;
    });

    return '$' + count.toFixed();
};