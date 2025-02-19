// Smooth Scroll for navigation
const scrollLinks = document.querySelectorAll('.navbar a');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust to account for navbar height
            behavior: 'smooth',
        });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields!');
    } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address!');
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Toggle Dark Mode';
darkModeToggle.classList.add('dark-mode-btn');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerText = 'Toggle Light Mode';
    } else {
        darkModeToggle.innerText = 'Toggle Dark Mode';
    }
});

// Optional: Save dark mode preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerText = 'Toggle Light Mode';
}

darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
