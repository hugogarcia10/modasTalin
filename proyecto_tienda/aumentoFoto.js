document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const button = product.querySelector(".button");
       
        product.addEventListener("click", () => {
            // Remover la clase expandida de cualquier producto
            products.forEach(p => {
                p.classList.remove("expanded");
                const btn = p.querySelector(".button");
                if (btn) btn.style.display = "none"; // Ocultar todos los botones
            });

            // Añadir la clase expandida al producto clickeado
            product.classList.add("expanded");
            button.style.display = "block"; // Mostrar el botón del producto expandido

            // Desplazar el producto al centro de la pantalla
            product.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });

        button.addEventListener("click", (e) => {
            e.stopPropagation(); // Evitar que el click en el botón también dispare el evento en el producto
            product.classList.remove("expanded");
            button.style.display = "none"; // Ocultar el botón al cerrar
        });
    });
});

