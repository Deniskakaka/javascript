import { superRound } from './index.js'

it('shoiuld array of rounded numbers to a specific value', () => {
    let result = superRound(-12.467567, 4);
    let wrong = superRound('sdfda', 2);
    let wrong2 = superRound(12, '34234');
    expect(result).toEqual([-12.4676, -12.4676, -12.4675, -12.4675, -12.4676]);
    expect(wrong).toEqual(null);
    expect(wrong2).toEqual(null);
});