import { reverseArray } from './index.js'

it('should reverse array', () => {
    const result = reverseArray([1, 2, 3, 4]);
    const notArray = reverseArray('dfsdfsdfdsfgsfsdf' || 12 || true || function() {});
    expect(result).toEqual([4, 3, 2, 1]);
    expect(notArray).toEqual(null);
});