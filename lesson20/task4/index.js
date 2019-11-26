export class Order {
    constructor(price, city, type) {
        this.id = `${Math.floor(1 + Math.random() * (100 + 1 - 1))}`;
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
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
        this.dateConfirmed = new Date();
        this.isConfirmed = true;
    }

    isVaildType(value) {
        if (value === 'Buy' || value === 'Sale') {
            return true;
        }
        return false;
    }
};