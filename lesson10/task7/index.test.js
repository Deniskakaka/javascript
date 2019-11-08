import { superRound } from './index.js'

it('shoiuld array of rounded numbers to a specific value', () => {
    let result = superRound(-12.467567, 4);
    expect(result).toEqual([-12.4676, -12.4676, -12.4675, -12.4675, -12.4676]);
});

it('shoiuld array of rounded numbers to a specific value', () => {
    let wrong = superRound('sdfda', 2);
    expect(wrong).toEqual(null);
});

it('shoiuld array of rounded numbers to a specific value', () => {
    let wrong2 = superRound(12, '34234');
    expect(wrong2).toEqual(null);
});