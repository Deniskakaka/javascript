import { getPrimes } from './index.js'
import {get } from 'https';

it('should show all prime numbers', () => {
    const result = getPrimes(15);
    const fractional = getPrimes(15.4);
    expect(result).toEqual(1, 2, 3, 5, 7, 11, 13);
    expect(fractional).toEqual(null);
});