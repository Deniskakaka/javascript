function test(a, b) {
    return Math.sqrt(a * a + b * b);
};

export function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func;
    }

    wrapper.calls = [];

    return wrapper;
}

const spyTest = spy(test);
spyTest(9, 1);
spyTest(3, 16);
spyTest(2, 12);

console.log(spyTest.calls)