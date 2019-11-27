export class User {
    constructor(id, name, sessionld) {
        this._id = id;
        this._name = name;
        this._sessionld = sessionld;
    }
};

export class UserRepository{
    constructor (arr) {
        this._users =  Object.freeze(arr);
    }

    getUserNames() {
       return  this._users.map(i => i._name);
    }

    getUselds() {
       return this._users.map(i => i._id);
    }

    getUserNameById(id) {
        let obj = this._users.filter(i => i._id === id);
        return obj[0]._name
    }
};


