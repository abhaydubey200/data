// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Timer logic for the offer section
    const timerFill = document.querySelector('.timer-fill');
    let timeLeft = 10 * 60; // 10 minutes in seconds
    setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerFill.style.width = `${(timeLeft / 600) * 100}%`;
            document.querySelector('.offer-timer p:last-of-type').textContent = `Offer ends in ${minutes}:${seconds < 10 ? '0' : ''}${seconds} Mins`;
        }
    }, 1000);
});
