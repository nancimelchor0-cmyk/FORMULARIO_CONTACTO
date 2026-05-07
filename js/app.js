document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

  
    if (nombre === '' || apellido === '' || telefono === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    alert('¡Formulario enviado con éxito!\nNombre: ' + nombre + '\nApellido: ' + apellido + '\nTeléfono: ' + telefono);
});
