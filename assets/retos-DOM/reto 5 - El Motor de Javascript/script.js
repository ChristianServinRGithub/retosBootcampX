document.addEventListener("DOMContentLoaded", () => {
  // Declarar las variables
  const imagen1 = document.getElementById("imagen1");
  const imagen2 = document.getElementById("imagen2");
  const imagen3 = document.getElementById("imagen3");
  const imagen4 = document.getElementById("imagen4");
  const descripcion = document.getElementById("descripcion");
  const boton = document.getElementById("boton");

  // Descripciones para cada imagen en el mismo orden que las imágenes
  let descripciones = ['Nissan 350z', 'Nissan 370z', 'Nissan GTR R35', 'Nissan GTR R34 Skyline'];

  // Agregar el evento al botón
  boton.addEventListener("click", cambiarImagen);

  // Crear la función
  function cambiarImagen() {
    let listaDeAutos = [imagen1, imagen2, imagen3, imagen4];
    let autoElegido = Math.floor(Math.random() * listaDeAutos.length);

    // Mostrar la imagen elegida y ocultar el resto
    for (let i = 0; i < listaDeAutos.length; i++) {
      if (i === autoElegido) {
        listaDeAutos[i].hidden = false; // Mostrar la imagen seleccionada
        descripcion.textContent = descripciones[i]; // Cambiar la descripción correspondiente
      } else {
        listaDeAutos[i].hidden = true; // Ocultar las otras imágenes
      }
    }
  }
});
