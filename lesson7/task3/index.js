function flatArray(arr) {
    let mas = arr.reduce((acc, num) => {
        return acc.concat(num);
    }, []);
    return mas;
};