function getPrimes(num) {
    if (num < 1) return false;
    for (let i = 1; i <= num; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j !== 0) {
                continue;
            }
            count++;
        }
        if (count == 2) {
            console.log(i)
        }
    }
}

getPrimes(10)