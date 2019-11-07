function cleanTransactionsList(arr) {
    arr = arr.filter((i, index) => {
        return !isNaN(i)
    }).map(i => {
        return '$' + Number(i).toFixed(2)
    });
    return arr;
};

console.log(cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ', 'sdfsdgs', '12.56', 'dfgfdgfsd', 13.45]));