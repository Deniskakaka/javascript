function getPrimes(num) {
    for (let i = 2; i <= num; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j) {
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