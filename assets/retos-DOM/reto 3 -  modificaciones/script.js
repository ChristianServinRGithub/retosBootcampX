const circulo = document.getElementById("circulo");
const boton = document.getElementsByClassName("boton")[0];
const textoColor = document.getElementsByClassName("texto-color")[0];

//modificar directamente
textoColor.style.fontSize = "20px";
textoColor.style.toggle = "red";

//Modificar con setAttribute
boton.setAttribute(
  "styles",
  "border-radius: 50%; background-color: white; color: grey"
);

//agregar un evento al botón
boton.addEventListener("click", cambiarColorDelCirculo);
boton.addEventListener("click", cambiarColorTexto);

function cambiarColorDelCirculo() {
  //lista de colores
  let listaDeColores = ["#FF0000", "#00FF00", "#095CEF"];
  //Elegir un color al azar
  let colorElegido = listaDeColores[Math.floor(Math.random() * listaDeColores.length)];
    //Aplicar color al circulo
    circulo.style.backgroundColor = colorElegido;
}

function cambiarColorTexto() {
    let listaDeColores = ["#A08B87", "#D1E905", "#05E9AB ", "#2B88DF"];
    //Elegir un color al azar
    let colorElegido = listaDeColores[Math.floor(Math.random() * listaDeColores.length)];
    //aplicar cambio al texto
    textoColor.style.color = colorElegido;
}
