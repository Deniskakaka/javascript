let result = 0;

export function add(number) {
    return result += number;
};

export function decrease(number) {
    return result -= number;
};

export function reset() {
    return result = 0;
};

export function getMemo() {
    return result;
}