function getTotalPrice(arr) {
    let count = arr.reduce((acc, number) => {
        return acc + number;
    });


    return '$' + Number(count.toFixed(2));
};