// Resume Starts Here

const headers = document.querySelectorAll('.resume h2');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

headers.forEach(header => observer.observe(header));

// Resume Ends Here