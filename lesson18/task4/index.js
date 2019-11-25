let mas = [];

function test(a, b) {
    mas.push([...arguments])
    return Math.sqrt(a * a + b * b);
};

export function spy(f) {
    return f;
}
spy.call = function() {
    return mas;
}