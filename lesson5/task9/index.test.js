import { findDivCount } from './index.js'

it('sould show order number multiple number', () => {
    const result = findDivCount(1, 10, 2);
    expect(result).toEqual(5);
});

it('sould show order number multiple number', () => {
    const wrong = findDivCount(-1, 0, 2);
    expect(wrong).toEqual(1);
});