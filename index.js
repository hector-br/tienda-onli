let carrito = [];
let total = 0;

// arreglo de productos
const productos = [
    { nombre: 'Sueter', descripcion: 'Sueter de alta calidad', precio: 159.9, imagen: 'imagenes/camisa.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa de alta calidad', precio: 159.9, imagen: 'imagenes/camisa2.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa de alta calidad', precio: 159.9, imagen: 'imagenes/camisa3.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Sudadera de alta calidad', precio: 159.9, imagen: 'imagenes/camisa4.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Chamarra', descripcion: 'Chaqueta Negra', precio: 39.99, imagen: 'imagenes/chamarra.jpg', talla: '28, 30, 32, 34' },
    { nombre: 'Chamarra', descripcion: 'Chamarra.', precio: 49.99, imagen: 'imagenes/chamarra2.jpg', talla: 'M, L' },
    { nombre: 'Chamarra', descripcion: 'Chamarra.', precio: 49.99, imagen: 'imagenes/chamarra3.jpg', talla: 'M, L' },
    { nombre: 'Chamarra', descripcion: 'Chamarra', precio: 49.99, imagen: 'imagenes/chamarra4.jpg', talla: 'M, L' },
    { nombre: 'Chamarra', descripcion: 'Chamarra', precio: 49.99, imagen: 'imagenes/chamarra5.jpg', talla: 'M, L' },
    { nombre: 'Chamarra', descripcion: 'Chamarra', precio: 49.99, imagen: 'imagenes/chamarra6.jpg', talla: 'M, L' },
    { nombre: 'Chamarra', descripcion: 'Chamarra', precio: 49.99, imagen: 'imagenes/chamarra7.jpg', talla: 'M, L' },
    { nombre: 'Chamarra', descripcion: 'Chamarra', precio: 49.99, imagen: 'imagenes/chamarra8.jpg', talla: 'M, L' },
    { nombre: 'Chamarra', descripcion: 'Chamarra', precio: 49.99, imagen: 'imagenes/chamarra9.jpg', talla: 'M, L' },
    { nombre: 'Short', descripcion: 'Short.', precio: 49.99, imagen: 'imagenes/short.jpg', talla: 'M, L' },
    { nombre: 'Short', descripcion: 'Short.', precio: 49.99, imagen: 'imagenes/short2.jpg', talla: 'M, L' },
    { nombre: 'Short', descripcion: 'Short', precio: 49.99, imagen: 'imagenes/short3.jpg', talla: 'M, L' },
    { nombre: 'Short', descripcion: 'Short', precio: 49.99, imagen: 'imagenes/short4.jpg', talla: 'M, L' },
    { nombre: 'Short', descripcion: 'Short', precio: 49.99, imagen: 'imagenes/short5.jpg', talla: 'M, L' },
    { nombre: 'Short', descripcion: 'Short', precio: 49.99, imagen: 'imagenes/short6.jpg', talla: 'M, L' },
    { nombre: 'Sudadera', descripcion: 'Sudadera', precio: 49.99, imagen: 'imagenes/sudadera.jpg', talla: 'M, L' },
    { nombre: 'Sudadera', descripcion: 'Sudadera', precio: 49.99, imagen: 'imagenes/sudadera2.jpg', talla: 'M, L' },
    { nombre: 'Sudadera', descripcion: 'Sudadera', precio: 49.99, imagen: 'imagenes/sudadera3.jpg', talla: 'M, L' },
    { nombre: 'Sudadera', descripcion: 'Sudadera', precio: 49.99, imagen: 'imagenes/sudadera4.jpg', talla: 'M, L' },
    { nombre: 'Sudadera', descripcion: 'Sudadera', precio: 49.99, imagen: 'imagenes/sudadera5.jpg', talla: 'M, L' },
    { nombre: 'Sudadera', descripcion: 'Sudadera', precio: 49.99, imagen: 'imagenes/sudadera6.jpg', talla: 'M, L' },
    { nombre: 'Sudadera', descripcion: 'Sudadera', precio: 49.99, imagen: 'imagenes/sudadera7.jpg', talla: 'M, L' },
    { nombre: 'Sueter', descripcion: 'Sueter', precio: 49.99, imagen: 'imagenes/sueter.jpg', talla: 'M, L' },
    { nombre: 'Sueter', descripcion: 'Sueter', precio: 49.99, imagen: 'imagenes/sueter2.jpg', talla: 'M, L' },
    { nombre: 'Camisa mujer', descripcion: 'Camisa de mujer', precio: 49.99, imagen: 'imagenes/camisaM1.jpg', talla: 'M, L' },
    { nombre: 'Camisa mujer', descripcion: 'Camisa de mujer', precio: 49.99, imagen: 'imagenes/camisaM2.jpg', talla: 'M, L' },
    { nombre: 'Camiseta mujer', descripcion: 'Camiseta de mujer, comoda color verde', precio: 49.99, imagen: 'imagenes/camisetaM1.jpg', talla: 'M, L' },
    { nombre: 'Sueter mujer', descripcion: 'Sueter para mujer, comodo y de calidad', precio: 49.99, imagen: 'imagenes/sudaderaM1.jpg', talla: 'M, L' },
    { nombre: 'Sueter mujer', descripcion: 'Sueter para mujer, caliente y comodo.', precio: 49.99, imagen: 'imagenes/sudaderaM2.jpg', talla: 'M, L' },
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
            <p>${producto.nombre}</p>
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
    const correo = document.getElementById('correo').value;
    if (!correo || !validarCorreo(correo)) {
        alert("El correo electrónico ingresado no es válido.");
        return;
    }

    const metodoPago = obtenerMetodoPago();
    if (!metodoPago) {
        alert("Selecciona un método de pago válido.");
        return;
    }

    // Mostrar la confirmación de compra
    const mensaje = carrito.map(producto => `${producto.nombre} - Talla: ${producto.talla} - $${producto.precio}`).join("\n");
    const totalCompra = carrito.reduce((sum, producto) => sum + producto.precio, 0);

    alert(`
        Detalles de la compra:
        ${mensaje}
        
        Total: $${totalCompra.toFixed(2)}
        
        Método de pago: ${metodoPago}
        
        Compra confirmada. ¡Gracias por tu compra!
    `);

    // Guardar el historial de compras en el localStorage
    guardarHistorialDeCompra(correo, carrito, metodoPago);

    // Vaciar el carrito después de la compra
    vaciarCarrito();
    cerrarVentanaPago();
});

// Función para validar el correo
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// Función para obtener el método de pago seleccionado
function obtenerMetodoPago() {
    const opciones = document.getElementsByName('metodo');
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value;
        }
    }
    return null; // Si no se seleccionó un método
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

function verSudaderas(){
    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    if(ocultarProductos.style.visibility == "hidden"){
        ocultarProductos.style.visibility = "visible";
    }else{
        ocultarProductos.style.visibility = "hidden";
    }   
    
}
