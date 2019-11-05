function getFiniteNumbers(arr) {
    const mass = arr.filter(i => {
        if (Number.isFinite(i)) {
            return i
        }
    });
    return mass;
};

function getFiniteNumbersV2(arr) {
    const mass = arr.filter(i => {
        if (isFinite(i)) {
            return i
        }
    });
    return mass;
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
    const mass = arr.filter(i => {
        if (isNaN(i)) {
            return i
        }
    });
    return mass;
};

function getIntegers(arr) {
    const mass = arr.filter(i => {
        if (Number.isInteger(i)) {
            return i
        }
    });
    return mass;
};