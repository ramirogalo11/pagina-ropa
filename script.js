  
/* =====================================
   TIENDA DE ROPA
   FUNCIONES PRINCIPALES
===================================== */


/* =====================================
   CONFIGURACIÓN DE WHATSAPP
===================================== */

// IMPORTANTE:
// Reemplazá este número por el número de WhatsApp
// de la tienda, incluyendo código de país y área.
// Ejemplo Argentina: 5491123456789

const numeroWhatsApp = "5491100000000";


/* =====================================
   CONSULTAS POR WHATSAPP
===================================== */

function consultarWhatsApp(producto = "") {

    const numero = numeroWhatsApp;

    let mensaje;

    if (producto) {
        mensaje = `¡Hola! Quería consultar por el producto: ${producto}. ¿Me podrían informar sobre talles y disponibilidad?`;
    } else {
        mensaje = "¡Hola! Quería consultar por sus productos y la nueva colección.";
    }

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}


/* =====================================
   CONECTAR BOTONES DE PRODUCTOS
===================================== */

const botonesProductos = document.querySelectorAll(".product-button");

botonesProductos.forEach((boton) => {

    boton.addEventListener("click", function(event) {

        event.preventDefault();

        const tarjeta = boton.closest(".product-card");

        const nombreProducto = tarjeta.querySelector("h3").textContent;

        consultarWhatsApp(nombreProducto);

    });

});


/* =====================================
   BOTÓN PRINCIPAL DE WHATSAPP
===================================== */

const botonWhatsApp = document.querySelector(".whatsapp-button");

if (botonWhatsApp) {

    botonWhatsApp.addEventListener("click", function(event) {

        event.preventDefault();

        consultarWhatsApp();

    });

}


/* =====================================
   MENÚ RESPONSIVE
===================================== */

const navegacion = document.querySelector(".nav");

const enlacesMenu = document.querySelectorAll(".nav a");

// Cerrar el menú al seleccionar una sección

enlacesMenu.forEach((enlace) => {

    enlace.addEventListener("click", function() {

        if (navegacion) {
            navegacion.classList.remove("menu-abierto");
        }

    });

});


/* =====================================
   ANIMACIONES AL HACER SCROLL
===================================== */

const elementosAnimados = document.querySelectorAll(
    ".section-heading, .category-card, .product-card, .about-content, .about-image, .contact-content"
);

if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

                observador.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.12
    });

    elementosAnimados.forEach((elemento) => {

        elemento.classList.add("animar");

        observador.observe(elemento);

    });

}


/* =====================================
   AÑO AUTOMÁTICO DEL FOOTER
===================================== */

const textoFooter = document.querySelector(".footer-content p");

if (textoFooter) {

    const añoActual = new Date().getFullYear();

    textoFooter.textContent =
        `© ${añoActual} TIENDA DE ROPA. Todos los derechos reservados.`;

}


/* =====================================
   MENSAJE EN CONSOLA
===================================== */

console.log("TIENDA DE ROPA: página cargada correctamente.");

/* =====================================
   FILTROS DE PRODUCTOS
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const botonesFiltros = document.querySelectorAll(".filter-button");
    const tarjetasProductos = document.querySelectorAll(".product-card");

    console.log("Botones encontrados:", botonesFiltros.length);
    console.log("Productos encontrados:", tarjetasProductos.length);

    if (!botonesFiltros.length || !tarjetasProductos.length) {
        console.error("No se encontraron los botones o productos.");
        return;
    }

    botonesFiltros.forEach((boton) => {

        boton.addEventListener("click", function () {

            const categoria = this.getAttribute("data-filter");

            botonesFiltros.forEach((item) => {
                item.classList.remove("active");
            });

            this.classList.add("active");

            tarjetasProductos.forEach((producto) => {

                const categoriaProducto =
                    producto.getAttribute("data-category");

                const mostrar =
                    categoria === "todos" ||
                    categoriaProducto === categoria;

                producto.classList.toggle("oculto", !mostrar);

            });

            console.log("Filtro seleccionado:", categoria);

        });

    });

});

