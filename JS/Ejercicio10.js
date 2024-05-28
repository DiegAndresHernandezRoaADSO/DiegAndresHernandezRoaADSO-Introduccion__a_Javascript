// 10. Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// // • (Inverso del dropWhile)


// Definición de la función takeWhile
function takeWhile(array, callback) {
    // Array para almacenar los elementos que cumplen la condición
    const result = [];
    // Recorremos el array
    // Iterar sobre cada elemento del array dado
    for (let i = 0; i < array.length; i++) {
      // Verificar si la función de callback devuelve false para el elemento actual
    if (!callback(array[i])) {
        // Si devuelve false, salir del bucle
        break;
    }
      // Si la función de callback devuelve true, agregar el elemento al array de resultados
    result.push(array[i]);
}
    // Devolver el array de resultados
    return result;
}
  // Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];
  // Llamar a la función takeWhile con el array de números y una función de callback que verifica si un número es menor que 4
const result = takeWhile(numbers, (num) => num < 4);
  // Imprimir el resultado
  console.log(result); // Output: [1, 2, 3]