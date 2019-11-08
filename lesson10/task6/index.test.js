import { getRandomNumbers } from './index.js'

it('should return array of from random numbers', () => {
    let result = getRandomNumbers(10, -0.1, 0.1);
    expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

it('should return array of from random numbers', () => {
    let result2 = getRandomNumbers(100, 1.3, 1.9);
    expect(result2).toEqual(null);
})