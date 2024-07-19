// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        // Prevenir que el formulario se envíe automáticamente
        event.preventDefault();

        // Validar los campos antes de enviar el formulario
        if (validateForm()) {
            // Aquí puedes enviar el formulario usando AJAX u otro método
            // Por ejemplo: form.submit();
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
        }

        // Validar campo email
        const email = document.getElementById('email');
        if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
            isValid = false;
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }

        return isValid;
    }

    function isValidEmail(email) {
        // Expresión regular para validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
