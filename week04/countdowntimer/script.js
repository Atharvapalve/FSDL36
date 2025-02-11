let countdownInterval;
let countdownDate;

function startCountdown() {
    const dateInput = document.getElementById('countdown-date').value;
    const timeInput = document.getElementById('countdown-time').value;

    if (!dateInput || !timeInput) {
        alert('Please select both date and time.');
        return;
    }

    // Combine the date and time inputs into a single Date object
    const selectedDate = new Date(dateInput + " " + timeInput);
    countdownDate = selectedDate.getTime();

    // Ensure the countdown doesn't restart if it's already running
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "";
    document.getElementById('countdown-date').value = '';
    document.getElementById('countdown-time').value = '';
}
