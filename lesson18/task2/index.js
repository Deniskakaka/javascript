export const wallet = {
    transactions: [1, 34, 67, 43, 678, 987],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    }
};