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