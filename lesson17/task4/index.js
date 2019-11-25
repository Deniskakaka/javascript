export const user = {
    firstName: "",
    lastName: "",
    setFullName(a, b) {
        this.firstName = a
        this.lastName = b
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};