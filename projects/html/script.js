document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

// Theme Toggle Starts Here

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
} else if (prefersDark) {
    document.body.classList.add('dark-theme');
}

const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setThemeIcon() {
    themeIcon.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '🌞';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    setThemeIcon();

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

setThemeIcon();

// Theme Toggle Ends Here