export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};

export const ship = {
    liftAnchorUp() {
        console.log(`${this.name} lifting anchor up`);
    },
    liftAnchorDown() {
        console.log(`${this.name} lifting anchor down`);
    },
};

Object.setPrototypeOf(ship, vehicle);