function splitText(string, numberCut) {
    let arr = [];
    let start = 0;
    while (true) {
        let str = string.substr(start, numberCut);
        if (str.length === 0) {
            break;
        }
        start += numberCut;
        arr.push(str[0].toUpperCase() + str.slice(1));
    }
    return arr.join('\n');
};

console.log(splitText('abcd efgh', 4));