// Inicializar AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

document.addEventListener("DOMContentLoaded", function () {
    const message = "Hemos recibido tu solicitud, pronto nos pondremos en contacto contigo.¡Gracias por tu interés en nuestros servicios! 😊";
    
    const messageElement = document.getElementById("animatedText");
    let index = 0;

    function typeWriter() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Ajusta la velocidad de la escritura
        }
    }

document.getElementById("messageModal").addEventListener("shown.bs.modal", function () {
    messageElement.innerHTML = ""; // Reiniciar texto
    index = 0;
    typeWriter();
});
});
document.getElementById('sendButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace redirija
    var myModal = new bootstrap.Modal(document.getElementById('messageModal'));
    myModal.show(); // Muestra el modal
});
    // Aplicar el estilo para quitar el borde a los inputs
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
        input.style.border = 'none';
    });
