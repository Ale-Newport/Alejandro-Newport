document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    const links = document.querySelectorAll('.btn, .links');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for reaching out! I’ll get back to you soon.');
        event.target.reset();
    });
});
