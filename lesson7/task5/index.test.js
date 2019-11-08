import { squareArray } from './index.js'

it('should return array in square', () => {
    let result = squareArray([2, 2, 2]);
    let wrong = squareArray('sdfsfsdf' || 12 || true || function() {});
    const nan = squareArray(['dfads', 'wdasasd', 'sfdasd'])
    expect(result).toEqual([4, 4, 4]);
    expect(wrong).toEqual(null);
    expect(nan).toEqual([NaN, NaN, NaN])
});