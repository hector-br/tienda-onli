let carrito = [];
let total = 0;

// arreglo de productos
const productos = [
    { nombre: 'Camisa', descripcion: 'Camisa manga larga', precio: 259.99, imagen: 'imagenes/camisa.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa de alta calidad', precio: 159.9, imagen: 'imagenes/camisa2.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa de alta calidad', precio: 150.0, imagen: 'imagenes/camisa3.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa azul', precio: 170.45, imagen: 'imagenes/camisa4.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Chamarra', descripcion: 'Chamarra blanca', precio: 439.99, imagen: 'imagenes/chamarra.jpg', talla: '28, 30, 32, 34' },
    { nombre: 'Chamarra', descripcion: 'Chamarra negra', precio: 400, imagen: 'imagenes/chamarra2.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra cafe', precio: 350.34, imagen: 'imagenes/chamarra3.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra roja', precio: 299, imagen: 'imagenes/chamarra4.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra negra', precio: 500.50, imagen: 'imagenes/chamarra5.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra azul', precio: 620.89, imagen: 'imagenes/chamarra6.jpg', talla: 'M, L, XS' },
    { nombre: 'Chamarra', descripcion: 'Chamarra roja', precio: 499, imagen: 'imagenes/chamarra7.jpg', talla: 'M, L, x, XS' },
    { nombre: 'Chamarra', descripcion: 'Chamarra mostasa', precio: 400.50, imagen: 'imagenes/chamarra8.jpg', talla: 'M, L, X, XS' },
    { nombre: 'Chamarra', descripcion: 'Chamarra combinada', precio: 700.99, imagen: 'imagenes/chamarra9.jpg', talla: 'M, L, Xl' },
    { nombre: 'Short', descripcion: 'Short claro', precio: 130.99, imagen: 'imagenes/short.jpg', talla: 'M, L, XL' },
    { nombre: 'Short', descripcion: 'Short blanco', precio: 199.99, imagen: 'imagenes/short2.jpg', talla: 'M, L, X' },
    { nombre: 'Short', descripcion: 'Short verde', precio: 200.99, imagen: 'imagenes/short3.jpg', talla: 'M, L, Xs, XL' },
    { nombre: 'Short', descripcion: 'Short combinado', precio: 150, imagen: 'imagenes/short4.jpg', talla: 'M, L, XL' },
    { nombre: 'Short', descripcion: 'Short azul', precio: 170.45, imagen: 'imagenes/short5.jpg', talla: 'M, L, X' },
    { nombre: 'Short', descripcion: 'Short azul/negro', precio: 199.99, imagen: 'imagenes/short6.jpg', talla: 'M, L, XS' },
    { nombre: 'Sudadera', descripcion: 'Sudadera rosa', precio: 249.99, imagen: 'imagenes/sudadera.jpg', talla: 'M, L, XL' },
    { nombre: 'Sudadera', descripcion: 'Sudadera',      precio: 349.99, imagen: 'imagenes/sudadera2.jpg', talla: 'M, L, Xs' },
    { nombre: 'Sudadera', descripcion: 'Sudadera azul', precio: 229.99, imagen: 'imagenes/sudadera3.jpg', talla: 'M, L, X, XL' },
    { nombre: 'Sudadera', descripcion: 'Sudadera azul/blanco', precio: 549.99, imagen: 'imagenes/sudadera4.jpg', talla: 'M, L, Xs' },
    { nombre: 'Sudadera', descripcion: 'Sudadera azul/naranja', precio: 449.99, imagen: 'imagenes/sudadera5.jpg', talla: 'M, L, XL, XS' },
    { nombre: 'Sudadera', descripcion: 'Sudadera negra', precio: 349.99, imagen: 'imagenes/sudadera6.jpg', talla: 'M, L, XL, X' },
    { nombre: 'Sudadera', descripcion: 'Sudadera blanca', precio: 359.99, imagen: 'imagenes/sudadera7.jpg', talla: 'M, L, X' },
    { nombre: 'Sueter', descripcion: 'Sueter negro', precio: 249.99, imagen: 'imagenes/sueter.jpg', talla: 'M, L, X, S' },
    { nombre: 'Sueter', descripcion: 'Sueter blanco', precio: 349.99, imagen: 'imagenes/sueter2.jpg', talla: 'M, L, x, S' },
    { nombre: 'Camisa', descripcion: 'Camisa de mujer', precio: 429.99, imagen: 'imagenes/camisaM1.jpg', talla: 'M, L, XS' },
    { nombre: 'Camisa', descripcion: 'Camisa de mujer', precio: 239.99, imagen: 'imagenes/camisaM2.jpg', talla: 'M, L, S' },
    { nombre: 'Camiseta mujer', descripcion: 'Camiseta de mujer, comoda color verde', precio: 199.99, imagen: 'imagenes/camisetaM1.jpg', talla: 'M, L, X' },
    { nombre: 'Sueter mujer', descripcion: 'Sueter para mujer, comodo y de calidad', precio: 349.99, imagen: 'imagenes/sudaderaM1.jpg', talla: 'M, L, XL, XS, X' },
    { nombre: 'Sueter mujer', descripcion: 'Sueter para mujer, caliente y comodo.', precio: 678.55, imagen: 'imagenes/sudaderaM2.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer (blanco)', precio: 678.55, imagen: 'imagenes/pantalon.jpg', talla: 'M, L, X, S' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer (negro)', precio: 678.55, imagen: 'imagenes/pantalon2.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer (verde)', precio: 678.55, imagen: 'imagenes/pantalon3.jpg', talla: 'M, L, X, S' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para hombre', precio: 678.55, imagen: 'imagenes/pantalon4.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer', precio: 678.55, imagen: 'imagenes/pantalon5.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon ', precio: 678.55, imagen: 'imagenes/pantalon7.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon azul', precio: 678.55, imagen: 'imagenes/pantalon8.jpg', talla: 'M, L, X' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido.jpg', talla: 'M, L, X, S' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido2.jpg', talla: 'M, L, X, S' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido3.jpg', talla: 'M, L, X, S' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido4.jpg', talla: 'M, L, X' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido5.jpg', talla: 'M, L, X, S' },
];



// Función para mostrar los productos en la página
function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('productos-container');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.descripcion}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
}

// Llamar a la función para mostrar los productos al cargar la página
mostrarProductos(productos);


function verImagenGrande(elemento) {
    var vistaGrandeProducto = document.getElementById("vista-grande");
    var imagenGrande = document.getElementById("imagen");
    var descripcion = document.getElementById("descripcion-producto");
    var precio = document.getElementById("precio-producto");
    var talla = document.getElementById("talla-modal");
    var tallasSelect = document.getElementById("tallas-producto");

    var imgUrl = elemento.getAttribute("data-img");
    var desc = elemento.getAttribute("data-description");
    var precioValue = elemento.getAttribute("data-price");
    var tallasValue = elemento.getAttribute("data-size").split(", ");

    imagenGrande.src = imgUrl;
    descripcion.innerHTML = desc;
    precio.innerHTML = "Precio: $" + precioValue;
    talla.innerHTML = "Tallas disponibles: ";

    tallasSelect.innerHTML = "<option value=''>Seleccionar talla</option>";

    tallasValue.forEach(function(talla) {
        var option = document.createElement("option");
        option.value = talla;
        option.textContent = talla;
        tallasSelect.appendChild(option);
    });

    vistaGrandeProducto.style.display = "block";
}

function vistaGrande(event) {
    if (event.target === document.getElementById("vista-grande")) {
        var vistaGrandeProducto = document.getElementById("vista-grande");
        vistaGrandeProducto.style.display = "none";
    }
}

function agregarAlCarrito() {
    var tallaSeleccionada = document.getElementById("tallas-producto").value;
    if (!tallaSeleccionada) {
        alert("Por favor, selecciona una talla antes de agregar al carrito.");
        return;
    }

    var imagen = document.getElementById("imagen").src;
    var nombreProducto = document.getElementById("descripcion-producto").textContent;
    var precioProducto = parseFloat(document.getElementById("precio-producto").textContent.replace('Precio: $', '').trim());

    carrito.push({ nombre: nombreProducto, imagen, precio: precioProducto, talla: tallaSeleccionada });

    alert("Producto añadido al carrito: " + nombreProducto + " - Talla " + tallaSeleccionada);
    actualizarCarrito();
    vistaGrande({target: document.getElementById("vista-grande")});
}

function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const totalElement = document.getElementById("total");

    carritoLista.innerHTML = "";
    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - Talla: ${producto.talla} - $${producto.precio}`;
        
        const eliminarButton = document.createElement("button");
        eliminarButton.textContent = "Quitar";
        eliminarButton.onclick = () => eliminarProducto(index);

        li.appendChild(eliminarButton);
        carritoLista.appendChild(li);
    });

    total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    totalElement.textContent = total.toFixed(2);
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function cerrarCarrito() {
    const carritoModal = document.getElementById("ventana-carrito");

    if (carritoModal.style.display === "none" || carritoModal.style.display === "") {
        carritoModal.style.display = "block";
    } else {
        carritoModal.style.display = "none";
    }
}

// Función de búsqueda lineal
function buscarProducto(query) {
    query = query.toLowerCase().trim();

    const resultados = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase().includes(query)) {
            resultados.push(productos[i]);
        }
    }

    if (resultados.length === 0) {
        alert("No se encontraron productos con esa búsqueda.");
    }

    mostrarProductos(resultados); // Actualiza los productos mostrados
}

// Manejo de eventos de búsqueda
document.getElementById('boton-busqueda').addEventListener('click', () => {
    const query = document.getElementById('barra-busqueda').value;
    buscarProducto(query);
});

// Opcional: realizar la búsqueda mientras el usuario escribe
document.getElementById('barra-busqueda').addEventListener('input', () => {
    const query = document.getElementById('barra-busqueda').value;
    buscarProducto(query);
});


//confirmar compra de productos
function confirmarCompra() {
    if (carrito.length == 0) {
        alert("El carrito está vacío. Agrega productos para comprar.");
        return;
    }

    // Mostrar la ventana para correo y selección de pago
    document.getElementById('ventana-pago').style.display = 'block';
}

// Función para cerrar el ventana de pago
function cerrarVentanaPago() {
    document.getElementById('ventana-pago').style.display = 'none';
}

// Función para manejar la confirmación de compra
document.getElementById('confirmar-pago').addEventListener('click', () => {
    // Generar el mensaje con los detalles de los productos en el carrito
    const mensaje = carrito.map(producto => `${producto.nombre} - Talla: ${producto.talla} - $${producto.precio}`).join("\n");
    const totalCompra = carrito.reduce((sum, producto) => sum + producto.precio, 0);

    // Mostrar la confirmación de compra
    alert(`
        Detalles de la compra:
        ${mensaje}
        
        Total: $${totalCompra.toFixed(2)}
        
        Compra confirmada. ¡Gracias por tu compra!
    `);

    // Vaciar el carrito después de la compra
    vaciarCarrito();
    cerrarVentanaPago();
});

// Función para obtener el método de pago (sin validación)
function obtenerMetodoPago() {
    const opciones = document.getElementsByName('metodo');
    return metodo; // Retornar un valor predeterminado o simplemente dejarlo así
}

// Función para guardar el historial de compra
function guardarHistorialDeCompra(correo, carrito, metodoPago) {
    const historial = {
        correo: correo,
        productos: carrito,
        metodoPago: metodoPago,
        fecha: new Date().toLocaleString()
    };

    // Guardar el historial en el localStorage
    let historialDeCompras = JSON.parse(localStorage.getItem('historialCompras')) || [];
    historialDeCompras.push(historial);
    localStorage.setItem('historialCompras', JSON.stringify(historialDeCompras));
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}



// Función para mostrar los productos en la página
function mostrarProductosSudaderas(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Sudadera');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};


 
// Llamar a la función para mostrar los productos al cargar la página
function verSudaderas(){
    mostrarProductosSudaderas(productos);
    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarSudaderas =  document.getElementsByClassName("contenedor-busqueda-botones")[0];
    if(ocultarProductos.style.visibility === "hidden" && mostrarSudaderas.style.visibility === 'visible'){
        ocultarProductos.style.visibility = "visible";
        mostrarSudaderas.style.visibility = "hidden";
        mostrarSudaderas.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{
        ocultarProductos.style.visibility = "hidden";
        mostrarSudaderas.style.visibility = "visible";
        mostrarSudaderas.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}

// Función para mostrar los productos en la página
function mostrarProductosShorts(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Short');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};
function verShorts(){
    mostrarProductosShorts(productos);
    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];
    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){
        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{
        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}


// Función para mostrar los productos en la página
function mostrarProductosChamarras(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Chamarra');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};
function verChamarras(){
    mostrarProductosChamarras(productos);
    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];
    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){
        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{
        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}


// Función para mostrar los productos en la página
function mostrarProductosPantalones(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Pantalon');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};
function verPantalones(){
    mostrarProductosPantalones(productos);
    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];
    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){
        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{
        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}


// Función para mostrar los productos en la página
function mostrarProductosCamisas(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Camisa');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};
function verCamisas(){
    mostrarProductosCamisas(productos);
    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];
    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){
        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{
        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}


// Función para mostrar los productos en la página
function mostrarProductosVestidos(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Vestido');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};
function verVestidos(){
    mostrarProductosVestidos(productos);
    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];
    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){
        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{
        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}
function volverArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


