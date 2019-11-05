function getFiniteNumbers(arr) {
    const mass = arr.filter(i => {
        if (Number.isFinite(i)) {
            return i
        }
    });
    return mass;
};

function getFiniteNumbersV2(arr) {
    return arr.map(i => { return isFinite(i) });
};

function getNaN(arr) {
    const mass = arr.filter(i => {
        if (Number.isNaN(i)) {
            return i
        }
    });
    return mass;
};

function getNaNV2(arr) {
    return arr.map(i => { return isNaN(i) });
};

function getIntegers(arr) {
    const mass = arr.filter(i => {
        if (Number.isInteger(i)) {
            return i
        }
    });
    return mass;
};