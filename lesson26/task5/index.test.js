import {maxFibonacci} from './index.js'

it('should return number fibanacci before value in function', () => {
    let result = maxFibonacci(5.7);
    expect(result).toEqual(5);
});

it('should return number fibanacci before value in function', () => {
    let result = maxFibonacci(0.7);
    expect(result).toEqual(0);
});

it('should return number fibanacci before value in function', () => {
    let result = maxFibonacci(0);
    expect(result).toEqual(0);
});

it('should return number fibanacci before value in function', () => {
    let result = maxFibonacci(3);
    expect(result).toEqual(2);
});