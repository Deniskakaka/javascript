import {dayOfWeek} from './index.js'

it('should return day week', () => {
    let result = dayOfWeek(new Date(2018,5,13),8);
    expect(result).toEqual('Fr');
});

it('should return day week', () => {
    let result = dayOfWeek(new Date(2018,5,13),11);
    expect(result).toEqual('Mo');
});