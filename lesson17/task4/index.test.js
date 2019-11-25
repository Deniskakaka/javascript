import { user } from './index.js'

it('should set fullname and get fullname', () => {
    let set = user.setFullName('Denis Skab');
    let result = user.getFullName();
    expect(result).toEqual('Denis Skab');
});