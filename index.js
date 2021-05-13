class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();

    }

    start() {
        let intervalId = null;
        intervalId= setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            if (deltaTime < 0) {
                const title = document.querySelector('h1');
                title.textContent='Курс по JS завершен!';
                clearInterval(intervalId);
                return;
            }
            const time = this.getTimeComponents(deltaTime);
            this.timerMarkup(time);

         }, 1000)
    }

    timerMarkup({ days, hours, mins, secs }) {
        const timer = document.querySelector(this.selector);
        timer.innerHTML = " ";
        timer.insertAdjacentHTML('beforeend', ` <div class="field">
                <span class="value" data-value="days">${days}</span>
                <span class="label">Days</span>
            </div>
        
            <div class="field">
                <span class="value" data-value="hours">${hours}</span>
                <span class="label">Hours</span>
            </div>
        
            <div class="field">
                <span class="value" data-value="mins">${mins}</span>
                <span class="label">Minutes</span>
            </div>
        
            <div class="field">
                <span class="value" data-value="secs">${secs}</span>
                <span class="label">Seconds</span>
            </div>`)
    }

    getTimeComponents(time) {
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )).padStart(2, '0');
    const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

    return {days, hours, mins, secs };
    }
    
}

const moduleTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 23, 2021'),
});