// Inicializar AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

document.getElementById("sendButton").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página
    
    var toastEl = document.getElementById("messageToast"); // Obtiene el Toast
    var toast = new bootstrap.Toast(toastEl);
    toast.show(); // Muestra el Toast
});

// Aplicar el estilo para quitar el borde a los inputs
var inputs = document.querySelectorAll('input, textarea');
inputs.forEach(function(input) {
    input.style.border = 'none';
});
