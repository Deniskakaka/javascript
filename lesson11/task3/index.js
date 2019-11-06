function splitString(text, numberCut) {
    let arr = [];
    let start = 0;
    if (typeof text != 'string') {
        return null;
    }
    if (numberCut === undefined) {
        numberCut = 10;
    }
    while (true) {
        let str = text.substr(start, numberCut);
        if (str.length === 0) {
            break;
        }
        start += numberCut;
        if (str.length < numberCut) {
            arr.push(str + '.'.repeat(numberCut - str.length))
        } else {
            arr.push(str)
        }
    };
    return arr;
};

console.log(splitString('denisdenisdenis', 6));