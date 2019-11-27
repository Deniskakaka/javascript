 class User {
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
       return  this._users.map(i => i._name);
    }

    getUselds() {
       return this._users.map(i => i._id);
    }

    getUserNameById(id) {
        let obj = this._users.find(i => i._id === id);
        if (obj === undefined) {
            return [];
        } 
        return obj._name
    }
};


const arr = [
    new User(1, 'aaa', 10001),
    new User(2, 'bbb', 10002),
    new User(3, 'ccc', 10003),
    new User(4, 'ddd', 10004),
    new User(5, 'eee', 10005),
];
    
 const Users = new UserRepository(arr);


console.log(Users.getUserNameById(3))