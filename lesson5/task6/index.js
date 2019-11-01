function getPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
};

function isPrime(num) {
    let count = 2;
    while (count < num) {
        if (num % count === 0) {
            return false;
        }
        count++;
    }
    return true;
}