function splitText(text, numberCut) {
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
        arr.push(str[0].toUpperCase() + str.slice(1));
    }
    return arr.join('\n');
};


console.log(splitText('dfgfsdfgsdsdfsdgshbsfsdfsfsdf'))