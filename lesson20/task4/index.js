export class Order {
    id = Math.floor(1 + Math.random() * (100 + 1 - 1));
    constructor(price, city, type) {
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = null;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price < 1000) {
            return false;
        }
        return true;
    }

    confirmOrder() {
        this.isConfirmed = new Date();
        this.isConfirmed = true;
    }

    isVaildType(value) {
        if (value === 'Buy') {
            return true;
        }
        if (value === 'Sale') {
            return false;
        }
    }
};