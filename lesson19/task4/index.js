export function User(a, b) {
    this.name = a
    this.age = b
};

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
};

User.prototype.reguestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function(number) {
    if (number <= 0) {
        return false;
    }
    if (number >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
        this.age = number;
        console.log(number)
    }
}