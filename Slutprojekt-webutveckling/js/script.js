document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = form.email.value;
            const subject = form.subject.value;
            const message = form.message.value;

            if (!validateEmail(email)) {
                alert('Ange en giltig e-postadress.');
            } else if (!subject.trim()) {
                alert('Ämne får inte vara tomt.');
            } else if (!message.trim()) {
                alert('Meddelande får inte vara tomt.');
            } else {
                form.submit();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
});
