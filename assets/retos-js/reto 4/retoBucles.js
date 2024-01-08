// 1. Imprime los números del 1 al 5

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. Recorre una lista de colores

let colores = ["rojo", "verde", "azul", "amarillo"];

for (const iterator of colores) {
  console.log(iterator);
}

// 3. Recorre las propiedades de un objeto persona

let persona = {
  nombre: "maria",
  edad: 27,
  profesion: "diseñadora",
};

for (const key in persona) {
  console.log(`${key}: ${persona[key]}`);
};

// 4. Encuentra el número más cercano al cuadrado de 100

let num = 1;

while (num * num < 100) {
    num++;
}
console.log(`El número más cercano a 100 cuyo cuadrado es menor a 100 es: ${num}`);

// 5. Imprime los números pares hasta el 10, imprimiendo al menos uno.

let pares = 0;

do {
    pares += 2;
    console.log(pares);
} while (pares < 10);
