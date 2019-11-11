'use strick';

let message = 'Just learn it!';
let who = 'Gromcode';
export function sendMessage(name) {
    console.log(`${name}, ${message} Your ${who}`);
};

export function setMessage(text) {
    message = text;
};