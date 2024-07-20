document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío automático del formulario

        if (validateForm()) {
            alert('Formulario válido, enviado correctamente.');
        } else {
            alert('Por favor complete todos los campos requeridos.');
        }
    });

    function validateForm() {
        let isValid = true;

        // Validar campo nombre
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            isValid = false;
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid'); // Agregar clase is-valid si es válido
        }

        // Validar campo email
        const email = document.getElementById('email');
        if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
            isValid = false;
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid'); // Agregar clase is-valid si es válido
        }

        return isValid;
    }

    function isValidEmail(email) {
        // Expresión regular para validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
