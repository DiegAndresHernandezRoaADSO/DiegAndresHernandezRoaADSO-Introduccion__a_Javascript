// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true


// Definición del array
const arreglo = [1, 2, 3, 4, 5, 6];

// Uso del método every para verificar si todos los elementos del arreglo son pares
const result = arreglo.every(element => element % 2 === 0);

// Imprimir el resultado
console.log(result);