import { User } from './index.js'

it('should object with methods', () => {
    let user1 = new User('Denis', 29);
    let result = user1.setAge(3);
    expect(result).toEqual(3);
});

it('should object with methods', () => {
    let user2 = new User('Oleg', 29);
    let result = user2.setAge(-1);
    expect(result).toEqual(false);
});