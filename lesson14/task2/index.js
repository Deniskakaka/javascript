'use strick';

export function creatMessenger() {
    let message = 'Just learn it!';
    let who = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${who}`);
    };

    function setMessage(text) {
        message = text;
    }

    function setSender(text) {
        message = text;
    }
    return {
        sendMessage,
        setMessage,
        setSender
    };
}