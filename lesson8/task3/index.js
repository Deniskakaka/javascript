export function pickProps(obj, arr) {
    let obj3 = {};
    for (let i in object(arr)) {
        for (let j in obj) {
            if (i === j) {
                obj3[j] = obj[j];
            }
        }
    }
    return obj3;
};

function object(arr) {
    let obj2 = {};
    arr.forEach(i => {
        obj2[i] = i;
    });
    return obj2;
};