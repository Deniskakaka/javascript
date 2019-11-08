import { reverseArray } from './index.js'

it('should retrun reverse array', () => {
    let result = reverseArray([1, 2, 3, 4]);
    let wrong = reverseArray('sdfasd' || 12 || true || function() {})
    expect(result).toEqual([4, 3, 2, 1]);
    expect(wrong).toEqual(null);
});