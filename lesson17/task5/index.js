let timerId = 0;
export const timer = {
    secondPassed: 0,
    minsPassed: 0,
    startTimer() {
        timerId = setInterval(() => {
            this.secondPassed = this.secondPassed + 5;
            if (this.secondPassed === 60) {
                this.minsPassed++;
                this.secondPassed = 0;
            }
        }, 5000);
    },
    getTime() {
        if (this.secondPassed < 10) {
            console.log(`${ + this.minsPassed}:${'0' + this.secondPassed}`)
        }
        if (this.secondPassed >= 10) {
            console.log(`${ + this.minsPassed}:${+ this.secondPassed}`)
        }
    },
    stopTimer() {
        clearInterval(timerId)
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondPassed = 0;
    }
}

timer.startTimer();