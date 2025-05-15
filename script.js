window.onload = function () {
    const endTime = new Date("April 30, 2023 11:00:00").getTime();

    const daysEl = document.querySelector(".days > p:first-child");
    const hoursEl = document.querySelector(".hours > p:first-child");
    const minsEl = document.querySelector(".minutes > p:first-child");
    const secsEl = document.querySelector(".seconds > p:first-child");

    const toggleButton = document.querySelector(".scroll_button");
    const heading = document.querySelector("#card_contents > p:nth-child(3)");
    const place = document.querySelector("#card_contents > p:nth-child(9)");

    let toggleState = 0;
    let celebrationDone = false;

    function toggleContent() {
        toggleState = (toggleState + 1) % 2;
        if (toggleState === 0) {
            heading.innerHTML = "Sabayaz";
            place.innerHTML = "Aman Hall<br>Sangli, Maharastra";
        } else {
            heading.innerHTML = "Engagement";
            place.innerHTML = "Aman Hall<br>Sangli, Maharastra";
        }
    }

    toggleButton.addEventListener("click", toggleContent);

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        let diff = endTime - now;

        if (diff <= 0 && !celebrationDone) {
            clearInterval(countdownInterval);
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minsEl.textContent = '00';
            secsEl.textContent = '00';
            triggerConfetti();
            celebrationDone = true;
            return;
        }

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        if (days < 10) days = '0' + days;

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minsEl.textContent = minutes;
        secsEl.textContent = seconds;
    }, 1000);

    //  Confetti celebration function
    function triggerConfetti() {
        // Optional: if you have a central timer display too:
        const timer = document.getElementById("timer");
        if (timer) {
            
        }

        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 }
        });

        let duration = 2 * 1000;
        let end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }
};
