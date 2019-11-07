import { calc } from './calculator.js'

it('should show string desicion', () => {
    const plus = calc('2 + 1');
    const minus = calc('2 - 1');
    const multi = calc('2 * 2');
    const delet = calc('2 / 2');
    expect(plus).toEqual('2 + 1 = 3');
    expect(minus).toEqual('2 - 1 = 1');
    expect(multi).toEqual('2 * 2 = 4');
    expect(delet).toEqual('2 / 2 = 1');
});