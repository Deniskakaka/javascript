import {maxFibonacci} from './index.js'

it('should return number fibanacci before value in function', () => {
    let result = maxFibonacci(8);
    expect(result).toEqual(8);
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
    expect(result).toEqual(3);
});

it('should return number fibanacci before value in function', () => {
    let result = maxFibonacci(15.7);
    expect(result).toEqual(13);
});

it('should return number fibanacci before value in function', () => {
    let result = maxFibonacci(8);
    expect(result).toEqual(8);
});