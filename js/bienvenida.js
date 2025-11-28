document.addEventListener("DOMContentLoaded", function() {
    const nombreGuardado = sessionStorage.getItem('nombreUsuario');
    const h1Nombre = document.getElementById('nombre-bienvenida');
    if (nombreGuardado) { 
        h1Nombre.textContent = nombreGuardado.toUpperCase();
    } else {
        h1Nombre.textContent = 'AMIGO';
    }

});