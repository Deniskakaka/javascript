export const user = {
    firstName: "",
    lastName: "",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullName) {
        let arr = fullName.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    },
};