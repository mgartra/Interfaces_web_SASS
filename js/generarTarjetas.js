// Mapa de productos
const productos = {
    1: { titulo: "Boina Roja Clásica", descripcion: "Estilo francés icónico con un toque moderno.", precio: 19.99, categoria: "temporada", imagen: "moda1.jpg" },
    2: { titulo: "Abrigo Beige Elegante", descripcion: "Abrigo largo con ajuste sofisticado y textura suave.", precio: 79.99, categoria: "preventa", imagen: "moda2.jpg" },
    3: { titulo: "Vestido Azul con Estampado", descripcion: "Vestido ligero con botones y diseño floral minimalista.", precio: 45.99, categoria: "rebajas", imagen: "moda3.jpg" },
    4: { titulo: "Vestido Blanco Vaporoso", descripcion: "Vestido de tela ligera con vuelo y un diseño romántico.", precio: 59.99, categoria: "temporada", imagen: "moda4.jpg" },
    5: { titulo: "Botines Rojos de Cuero", descripcion: "Botines de tacón medio con diseño en cuero grabado.", precio: 65.99, categoria: "outlet", imagen: "moda5.jpg" },
    6: { titulo: "Botines Negros de Tacón", descripcion: "Elegantes y sofisticados, perfectos para la noche.", precio: 70.99, categoria: "rebajas", imagen: "moda6.jpg" }
};

// Obtener la categoría de la página actual
const categoriaPagina = document.body.className.replace("-productos", "");

// Seleccionar el contenedor de productos
const contenedor = document.querySelector(`.${categoriaPagina}-productos`);

if (contenedor) {
    let contador = 0;

    Object.entries(productos).forEach(([id, producto]) => {
        if (producto.categoria === categoriaPagina && contador < 25) {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add(`producto-${id}`);
            tarjeta.innerHTML = `
                <img src="Imagenes/moda${idProducto}.jpg" alt="${producto.titulo}">
                <h4>${producto.titulo}</h4>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <a href="detalle.html?id=${id}">Ver más</a>
            `;
            contenedor.appendChild(tarjeta);
            contador++;
        }
    });
}
