document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards");
  const mensaje = document.getElementById("mensaje");
  const mensajeContenido = document.getElementById("mensaje-contenido");

  cards.forEach((cards) => {
    cards.addEventListener("click", function () {
      // Mostrar mensaje
      mensajeContenido.textContent = `Producto agregado al carrito: ${
        cards.querySelector("h2").textContent
      }`;
      mensaje.style.display = "block";

      // Ocultar mensaje después de 2 segundos
      setTimeout(function () {
        mensaje.style.display = "none";
      }, 2000);
    });
  });
});
