// Active Link Starts Here

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        item.classList.add('active');
    });
});

// Active Link Ends Here

// ----------------------------

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

// ----------------------------

// Menu Toggle Starts Here

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');

    // Accessibility toggle
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
});

// Menu Toggle Ends Here

// ----------------------------

// Footer Starts Here

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

// Footer Ends Here

// ----------------------------

// About Starts Here

const headers = document.querySelectorAll('.resume h2');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

headers.forEach(header => observer.observe(header));

// About Ends Here

// ----------------------------

// Contact Form Starts Here

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        result.innerHTML = "Thanks for reaching out!";
        form.reset();
    } else {
        result.innerHTML = "Oops! Something went wrong.";
    }
});

// Contact Form Ends Here