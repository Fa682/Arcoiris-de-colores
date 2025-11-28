document.addEventListener("DOMContentLoaded", function() {
    const botonGuardar = document.getElementById("btnGuardar");
    const inputNombre = document.getElementById("nombreUsuario");
    if (botonGuardar) {
        botonGuardar.addEventListener("click", function() {
            let nombre = inputNombre.value;
            if (nombre.trim() !== "") {
                sessionStorage.setItem('nombreUsuario', nombre);
                window.location.href = 'bienvenida.html';
            } else {
                alert("Por favor, escribe tu nombre.");
            }
        });
    }
});