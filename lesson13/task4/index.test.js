import { calc } from './calculator.js'

it('should show string desicion', () => {
    const plus = calc('2 + 1');
    expect(plus).toEqual('2 + 1 = 3');
});

it('should show string desicion', () => {
    const minus = calc('2 - 1');
    expect(minus).toEqual('2 - 1 = 1');
});

it('should show string desicion', () => {
    const multi = calc('2 * 2');
    expect(multi).toEqual('2 * 2 = 4');
});

it('should show string desicion', () => {
    const delet = calc('2 / 2');
    expect(delet).toEqual('2 / 2 = 1');
});

it('should show string desicion', () => {
    const noString = calc(1 + 2);
    expect(noString).toEqual(null);
});