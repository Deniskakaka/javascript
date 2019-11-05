function getFiniteNumbers(arr) {
    const mass = arr.map(i => { return Number.isFinite(i) });
    return mass
};

function getFiniteNumbersV2(arr) {
    return arr.map(i => { return isFinite(i) });
};

function getNaN(arr) {
    return arr.map(i => { return Number.isNaN(i) });
};

function getNaNV2(arr) {
    return arr.map(i => { return isNaN(i) });
};

function getIntegers(arr) {
    return arr.map(i => { return !Number.isInteger(i) });
};