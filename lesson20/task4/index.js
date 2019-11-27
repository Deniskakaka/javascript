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
        return this.price < 1000 ? false : true;
    }

    confirmOrder() {
        this.dateConfirmed = new Date();
        this.isConfirmed = true;
    }

    isVaildType(value) {
        if(value === 'Buy' || value === 'Sell') return true;
        return false;
       
    }
};