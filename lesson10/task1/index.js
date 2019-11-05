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
        if (window.isFinite(i)) {
            return i
        }
    });
    return mass;
};

function getNaN(arr) {
    const mass = [];
    arr.map(i => {
        if (Number.isNaN(i)) {
            mass.push(i)
        }
    });
    return mass;
};

function getNaNV2(arr) {
    const mass = [];
    arr.map(i => {
        if (isNaN(i)) {
            mass.push(i)
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