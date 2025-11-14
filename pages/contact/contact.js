if (document.getElementById('contactForm')) {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let allFieldsValid = true;

        if (!name || name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            allFieldsValid = false;
        }

        if (!email || !email.includes('@') || !email.includes('.')) {
            showError('emailError', 'Please enter a valid email');
            allFieldsValid = false;
        }

        if (!subject) {
            showError('subjectError', 'Please enter a subject');
            allFieldsValid = false;
        }

        if (!message || message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            allFieldsValid = false;
        }

        if (allFieldsValid) {
            alert(`✅ Thank you, ${name}! Your message has been sent.`);
            form.reset();
        }
    });

    function showError(errorId, text) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = text;
            errorElement.style.display = 'block';
        }
    }

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const errorElement = document.getElementById(this.id + 'Error');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
    });
}