// countdownTimer.js

let days, hours, minutes, seconds;

// Function to start the countdown
function startCountDown(countDownDate, updateCallback) {
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Call the callback function with the updated values
    updateCallback({ days, hours, minutes, seconds });

    // If the countdown is over, stop the interval
    if (distance < 0) {
      clearInterval(countdown);
      updateCallback({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      });
    }
  }, 1000);
}

export { startCountDown };
