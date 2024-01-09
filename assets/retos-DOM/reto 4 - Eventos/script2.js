document.addEventListener("DOMContentLoaded", function () {
  // Definir constantes
  let boton1 = document.querySelector(".agregar-carrito1");
  let boton2 = document.querySelector(".agregar-carrito2");
  let boton3 = document.querySelector(".agregar-carrito3");
  let mensajeVerde = document.getElementById("mensaje-verde");
  let mensajeContenido = document.getElementById("mensaje-contenido");
  // Contador para la cantidad de productos en el carrito
  let cantidadCarrito = 0;
  let spanCantidadCarrito = document.getElementById("cantidad-carrito");

  //total
  let total = 0;
  let spanCantidadTotal = document.getElementById("cantidad-total");
  let precioHamburguesa = document.getElementById("precio-hamburguesa");
  let precioHotDog = document.getElementById("precio-hotDog");
  let precioCocaCola = document.getElementById("precio-cocaCola");

  // Escuchar evento por cada botón
  boton1.addEventListener("click", agregarAlCarrito);
  boton2.addEventListener("click", agregarAlCarrito);
  boton3.addEventListener("click", agregarAlCarrito);

  function agregarAlCarrito() {
    // Obtener el título del producto específico que se hizo clic
    let producto = this.parentElement.querySelector("h2").textContent;

    mensajeContenido.textContent = `Producto Agregado al carrito: ${producto}`;
    mensajeVerde.style.display = "block";
    //quitar el mensaje
    setTimeout(function () {
      mensajeVerde.style.display = "none";
    }, 2000);

    // Incrementar la cantidad de productos en el carrito
    cantidadCarrito++;
    // Actualizar el contenido del contador en el elemento span
    spanCantidadCarrito.textContent = cantidadCarrito;

    // Sumar el precio del producto al total
    if (producto === "Producto 1") {
      total += parseFloat(precioHamburguesa.textContent);
    } else if (producto === "Producto 2") {
      total += parseFloat(precioHotDog.textContent);
    } else if (producto === "Producto 3") {
      total += parseFloat(precioCocaCola.textContent);
    }

    // Actualizar el contenido del contador en el elemento span
    spanCantidadTotal.textContent = total.toFixed(2);
  }
});
