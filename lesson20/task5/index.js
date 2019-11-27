export class User {
    constructor(id, name, sessionld) {
        this._id = id;
        this._name = name;
        this._sessionld = sessionld;
    }
};

class UserRepository{
    constructor (arr) {
        this._users =  Object.freeze(arr);
    }

    getUserNames() {
       let masName = [];
       masName.push(this._users.map(i => i._name));
       return masName
    }

    getUselds() {
       let masId = [];
       masId.push(this._users.map(i => i._id));
       return masId;
    }

    getUserNameById(id) {
       return this._users.filter(i => i._id === id);
    }
};