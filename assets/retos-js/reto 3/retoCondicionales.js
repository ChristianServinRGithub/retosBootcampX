// imprimiendo si un usuario es mayor o menor de edad
let usuario = {
  nombre: "Xavier",
  edad: 21,
};

if (usuario.edad >= 21) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// de acuerdo a la acción ingresada "crear, colocar, actualizar y borrar" se imprima que acción se realizará

let accion = "";

switch (accion) {
  case "crear":
    console.log("Crear");
    break;
  case "colocar":
    console.log("Colocar");
    break;
  case "actualizar":
    console.log("Actualizar");
    break;
  case "borrar":
    console.log("Borrar");
    break;
  default:
    console.log("Seleccione una acción");
    break;
}

// si un número es par o impar.

let numero = 12;
let resultado = (numero % 2 === 0) ? 'Es Par' : 'Es Impar';
console.log(resultado);
