import { getPrimes } from './index.js'

it('should show all prime numbers', () => {
    const result = getPrimes(15);
    expect(result).toEqual(1, 2, 3, 5, 7, 11, 13);
});

it('should show all prime numbers', () => {
    const fractional = getPrimes(15.4);
    expect(fractional).toEqual(null);
});