import { calc } from './calculator.js'

it('should show string desicion plus', () => {
    const plus = calc('2 + 1');
    expect(plus).toEqual('2 + 1 = 3');
});

it('should show string desicion minus', () => {
    const minus = calc('2 - 1');
    expect(minus).toEqual('2 - 1 = 1');
});

it('should show string desicion multi', () => {
    const multi = calc('2 * 2');
    expect(multi).toEqual('2 * 2 = 4');
});

it('should show string desicion delet', () => {
    const delet = calc('2 / 2');
    expect(delet).toEqual('2 / 2 = 1');
});