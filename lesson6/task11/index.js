function checker(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    if (max + min > 1000) {
        return true;
    } else {
        return false;
    }
};