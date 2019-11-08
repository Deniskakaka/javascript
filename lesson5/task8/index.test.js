import { compareSums } from './index.js'

it('should retrun who more if first true second false', () => {
    const first = compareSums(12, 5, 2, 5);
    expect(first).toEqual(true);
});

it('should retrun who more if first true second false', () => {
    const second = compareSums(2, 3, 12, 5);
    expect(second).toEqual(false);
});