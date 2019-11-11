'use strick';

let message = 'Just learn it!';

export function sendMessage(name) {
    console.log(`${name}, ${message} You ${who}`);
};

export function setMessage(text) {
    message = text;
};