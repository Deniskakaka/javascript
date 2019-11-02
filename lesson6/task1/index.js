function getArrayBounds(arr) {
    if (Array.isArray(arr)) {
        let mas = [arr.length, arr[0], arr.length - 1];
        console.log(mas);
    } else {
        return null;
    }

};

getArrayBounds([1, 2, 3, 4])