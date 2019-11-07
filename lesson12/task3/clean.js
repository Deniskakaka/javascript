export const cleanTransactionsList = arr => {
    return arr.filter(i => !isNaN(i)).map(i => '$' + Number(i).toFixed(2));
};

console.log(cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ', 'sdfsdgs', '12.56', 'dfgfdgfsd', 13.45]));