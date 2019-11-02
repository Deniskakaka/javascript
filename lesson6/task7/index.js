function sortDesc(array) {
    for (let i = 0, endI = array.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > array[j + 1]) {
                let swap = array[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return array;
}