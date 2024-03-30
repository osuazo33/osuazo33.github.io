var yesButton = document.getElementById("siBtn");
var noButton = document.getElementById("noBtn");
var messageDiv = document.getElementById("message");
var noButtonClicks = 0; // Contador para los clics en "No"
var size = 20; // Tamaño inicial del botón "Sí"

yesButton.addEventListener("click", function() {
    var message = "¡TÚ TAMBIÉN ME GUSTAS Y MUCHO <3! Debes darme " + noButtonClicks + " besos.";
    alert(message);
    // Agregar efecto de partículas de corazones
    particlesJS('message', {
        "particles": {
            // Configuración de partículas
        },
        // Configuración de interactividad
    });
    // Hacer el botón "Sí" más grande
    size *= 1.2; // Aumentar el tamaño en un 20%
    yesButton.style.fontSize = size + "px";
});

noButton.addEventListener("click", function() {
    var noButton = document.getElementById("noBtn");
    // Incrementar el contador de clics en el botón "No"
    noButtonClicks++;
    // Cambiar el texto del botón "No" dependiendo del número de clics
    switch (noButtonClicks) {
        case 1:
            noButton.textContent = "¡Uy, un accidente!";
            break;
        case 2:
            noButton.textContent = "¿Segura?";
            break;
        case 3:
            noButton.textContent = "¿SEGURA QUE ESTAS SEGURA?";
            break;
        case 4:
            noButton.textContent = "¿TOTALMENTE SEGURA?";
            break;
        default:
            noButton.textContent = "¡Oh no! ¿Quién puso esto aquí?";
            break;
    }
    // Mover el botón "No" a un lugar aleatorio
    var container = document.querySelector(".container");
    var randomX = Math.floor(Math.random() * (container.offsetWidth - noButton.offsetWidth));
    var randomY = Math.floor(Math.random() * (container.offsetHeight - noButton.offsetHeight));
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    // Hacer el botón "Sí" más grande
    size *= 1.2; // Aumentar el tamaño en un 20%
    yesButton.style.fontSize = size + "px";
});
