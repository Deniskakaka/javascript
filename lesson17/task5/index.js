let timerId = 0;
const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer() {
        timerId = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed++;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    getTime() {
        if (this.secondsPassed < 10) {
            return `${this.minsPassed}:${'0' + this.secondsPassed}`;
        }
        if (this.secondsPassed >= 10) {
            return `${this.minsPassed}:${this.secondsPassed}`;
        }
    },
    stopTimer() {
        clearInterval(timerId)
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    }
}