function withdraw(clients, balances, client, amount) {
    let index = 0;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            index = i;
        }
    };
    for (let i = 0; i < balances.length; i++) {
        if (index == i) {
            if (balances[i] < amount) {
                return -1;
            } else {
                return balances[i] - amount;
            }
        }
    }
};