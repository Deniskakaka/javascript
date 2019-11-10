import { squareArray } from './index.js'

it('should return array in square', () => {
    let result = squareArray([2, 2, 2]);
    expect(result).toEqual([4, 4, 4]);
});

it('should return array in square', () => {
    let wrong = squareArray('sdfsfsdf' || 12 || true || function() {});
    expect(wrong).toEqual(null);
});