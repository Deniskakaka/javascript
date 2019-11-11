'use strick';

let message = 'Just learn it!'

function sendMessage(name) {
    const who = 'Gromcode';
    console.log(`${name}, ${message} You ${who}`);
};

function setMessage(text) {
    message = text;
};

sendMessage('Ann');
setMessage('Good job!');
sendMessage('Ann');