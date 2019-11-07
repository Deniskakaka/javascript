function cleanTransactionsList(arr) {
    arr = arr.filter((i, index) => {
        if (typeof i == 'string' && !i.match(/[a-z]/i)) {
            return i
        }
        if (Number(i)) {
            return i;
        }
    }).map(i => {
        if (typeof i == 'string') {
            return '$' + Number(i).toFixed(2)
        } else {
            return '$' + i.toFixed(2);
        }
    });
    return arr;
};

console.log(cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ', 'sdfsdgs', '12.56', 'dfgfdgfsd', 13.45]));