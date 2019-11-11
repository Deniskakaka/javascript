import { makeCounter } from './index.js'

it('should add number', () => {
    let result = makeCounter();
    let count = result();
    expect(count).toEqual(0);
});

it('should add number', () => {
    let result = makeCounter();
    result();
    let count = result();
    expect(count).toEqual(1);
});

it('should add number', () => {
    let result = makeCounter();
    result();
    result();
    let count = result();
    expect(count).toEqual(2);
});