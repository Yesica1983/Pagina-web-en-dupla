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
            setInvalid(nombre, 'Por favor ingrese su nombre.');
        } else {
            setValid(nombre);
        }

        // Validar campo email
        const email = document.getElementById('email');
        if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
            isValid = false;
            setInvalid(email, 'Por favor ingrese un correo electrónico válido.');
        } else {
            setValid(email);
        }

        // Validar campo mensaje
        const mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim() === '') {
            isValid = false;
            setInvalid(mensaje, 'Por favor escriba su mensaje.');
        } else {
            setValid(mensaje);
        }

        return isValid;
    }

    function setInvalid(element, message) {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
        element.nextElementSibling.innerHTML = message;
    }

    function setValid(element) {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
        element.nextElementSibling.innerHTML = '';
    }

    function isValidEmail(email) {
        // Expresión regular para validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
