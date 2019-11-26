class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    };

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    };

    setAge(number) {
        if (number >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
        }
        this.age = number;
        if (number <= 0) {
            return false;
        }
        return number;
    };
};