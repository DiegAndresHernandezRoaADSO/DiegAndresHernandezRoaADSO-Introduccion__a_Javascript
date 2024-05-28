// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined


// Definimos un arreglo de números
const numerosarray = [9, 7, 3, 5, 6, 2, 1];
// Encontramos el índice del elemento 2 en el arreglo
const index1 = numerosarray.indexOf(2);
console.log(index1); // Imprime 5, ya que el elemento 2 está en la posición 5 del arreglo
// Encontramos el índice del primer elemento que cumple con la condición de ser mayor a 4 y menor que 7
const index2 = numerosarray.findIndex(item => item > 4 == item < 7);
// Nota: La expresión `item > 4 == item < 7` podría no funcionar como se espera debido a cómo se evalúan las comparaciones en JavaScript
console.log(index2); // Imprime 3, ya que el primer número que cumple con la condición es 5 y está en la posición 3 del arreglo