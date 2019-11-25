let timerId = 0;
export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer() {
        timerId = setInterval(() => {
            this.secondsPassed = this.secondPassed + 5;
            if (this.secondsPassed === 60) {
                this.minsPassed++;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    getTime() {
        if (this.secondPassed < 10) {
            console.log(`${this.minsPassed}:${'0' + this.secondsPassed}`)
        }
        if (this.secondPassed >= 10) {
            console.log(`${this.minsPassed}:${this.secondsPassed}`)
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