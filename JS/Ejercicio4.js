// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".



const arreglo = [1, 2, 3, 4, 5];
const resultado = arreglo.filter(elemento => elemento % 2 === 0); // Filtra los números pares
console.log(resultado); // Output: [2, 4]
