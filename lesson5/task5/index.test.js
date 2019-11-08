import { getSum } from './index.js'
it('should show desicion function sum', () => {
    const result = getSum(1, 6);
    const notNumber = getSum(-1, 0);
    expect(result).toEqual(12);
    expect(notNumber).toEqual(0);
});