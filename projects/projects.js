// Project Page Script Starts Here

// Set the target date for the countdown (12 months from now)
const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 12);

// Get countdown elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Get form elements
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const messageElement = document.getElementById('message');

// Update countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate.getTime() - now;

    if (timeRemaining <= 0) {
        // Countdown finished
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }

    // Calculate time units
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update DOM with zero-padded values
    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

// Email form submission
emailForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Basic email validation
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission (replace with actual backend call)
    saveEmail(email);
    showMessage('✓ Thanks! We\'ll notify you when we launch', 'success');
    emailInput.value = '';

    // Clear message after 5 seconds
    setTimeout(() => {
        messageElement.textContent = '';
    }, 5000);
});

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Save email (localStorage example)
function saveEmail(email) {
    let emails = JSON.parse(localStorage.getItem('comingSoonEmails')) || [];

    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('comingSoonEmails', JSON.stringify(emails));
    }
}

// Display message
function showMessage(text, type) {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
}

// Initialize countdown on page load
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Prevent form submission on Enter if email is invalid
emailInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        emailForm.dispatchEvent(new Event('submit'));
    }
});


// Project Page Script Ends Here