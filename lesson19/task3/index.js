export const user = {
    firstName: '',
    lastName: '',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        let mas = value.split(' ');
        this.firstName = mas[0];
        this.lastName = mas[1];
    }
};