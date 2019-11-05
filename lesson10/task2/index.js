function getParsedIntegers(arr) {
    return arr.map(i => { return Number.parseInt(i) });
};

function getParsedIntegersV2(arr) {
    return arr.map(i => { return parseInt(i) });
};

function getParsedFloats(arr) {
    return arr.map(i => { return Number.parseFloat(i) });
};

function getParsedFloatsV2(arr) {
    return arr.map(i => { return parseFloat(i) });
}