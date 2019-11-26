export class vehicle {
    constructor(name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
};

export class ship extends vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels);
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }

    stop() {
        console.log(`${this.name} lifting anchor down`);
        super.stop();
    }
};