// Selecciona el elemento con la clase 'intro'
let intro = document.querySelector('.intro');
// Selecciona el elemento con la clase 'logo'
let logo = document.querySelector('.logo');
// Selecciona todos los elementos con la clase 'logo-parts' y los almacena en una NodeList
let logoSpan = document.querySelectorAll('.logo-parts');

// Espera a que el contenido del DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', () => {
    // Se ejecuta después de un tiempo específico
    setTimeout(() => {
        // Itera sobre cada elemento 'span' en 'logoSpan'
        logoSpan.forEach((span, index) => {
            // Se ejecuta después de un tiempo específico para cada iteración
            setTimeout(() => {
                // Añade la clase 'active' al elemento 'span'
                span.classList.add('active');
            }, (index + 1) * 100); // Incrementa el tiempo de espera para cada iteración
        });

        // Se ejecuta después de un tiempo específico
        setTimeout(() => {
            // Itera sobre cada elemento 'span' en 'logoSpan'
            logoSpan.forEach((span, index) => {
                // Se ejecuta después de un tiempo específico para cada iteración
                setTimeout(() => {
                    // Remueve la clase 'active' y añade la clase 'fade' al elemento 'span'
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50); // Incrementa el tiempo de espera para cada iteración
            });
        }, 2000); // Se ejecuta después de 2000 milisegundos (2 segundos)

        // Se ejecuta después de un tiempo específico
        setTimeout(() => {
            // Modifica el estilo del elemento 'intro' para moverlo fuera de la pantalla
            intro.style.top = '-100vh';
        }, 2300); // Se ejecuta después de 2300 milisegundos (2.3 segundos)
    });
});
