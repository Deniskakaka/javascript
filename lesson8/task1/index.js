function transformToObject(arr) {
    let obj = {};
    arr.forEach(i => {
        obj[i] = i;
    });
    return obj
};