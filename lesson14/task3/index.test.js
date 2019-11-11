import { add, decrease, reset, getMemo } from './index.js'

it('should add to the result', () => {
    let result = add(2);
    expect(result).toEqual(2);
});

it('should subtract from number', () => {
    let result = decrease(3);
    expect(result).toEqual(-1);
});

it('should subtract from number', () => {
    let result = reset();
    expect(result).toEqual(0);
});

it('should subtract from number', () => {
    let result = getMemo();
    expect(result).toEqual(0);
});