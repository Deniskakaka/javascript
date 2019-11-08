import { getSum } from './index.js'
it('should show desicion function sum', () => {
    const result = getSum(1, 6);
    expect(result).toEqual(12);
});

it('should show desicion function sum', () => {
    const notNumber = getSum(-1, 0);
    expect(notNumber).toEqual(0);
});