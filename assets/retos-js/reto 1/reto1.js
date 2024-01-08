let nombre = 'Juan';
let saludo = '¡Hola Mundo!';
let array1 = [1,2,3,4,5];

console.log(`${saludo} soy ${nombre}`);
console.log(`Mi nombre en mayusculas es: ${nombre.toLocaleUpperCase()}`);
console.log(`Mi nombre en minusculas es: ${nombre.toLocaleLowerCase()}`);
console.log(`El mensaje en de ${saludo} tiene ${saludo.length} caracteres`);
console.log(`El tercer numero del arrey1 con los valores ${array1} es: ${array1[2]}`);
array1.push(6);
console.log(`Se añade el numero que sigue en orden al final del arreglo1 y es: ${array1[5]}`);

let texto = 'La lluvia en Sevilla es una maravilla';
let palabra = 'lluvia';

console.log(texto.includes(palabra));


console.log(`Se encontró el patron '${[palabra]}' en el texto '${texto}' por lo que el resultado es: ${texto.includes(palabra)}`);

//regex
let texto2 = 'La lluvia en Sevilla es una maravilla';
let patron = /lluvia/;
let comparacion = texto2.match(patron);

console.log(`Se encontró el '${patron}' en el texto '${texto2}' por lo que el resultado es: ${comparacion}.`);
