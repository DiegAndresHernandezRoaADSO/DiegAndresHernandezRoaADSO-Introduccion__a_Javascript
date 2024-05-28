// 9. Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)


// Función que elimina elementos del array hasta que el callback devuelve false
const dropWhile = function (array, callback) {
    let drop = false; // Variable para activar/desactivar la eliminación
    // Recorrer el array
    for (let i = 0; i < array.length; i++) {
      // Activar el "drop" si el callback devuelve false por primera vez
    if (!drop && !callback(array[i])) {
        drop = true;
    }
      // Si el "drop" está activado, devolver el array restante
    if (drop) {
        return array.slice(i);
    }
}

    // Si no se activó el "drop", devolver un array vacío
    return [];
}

  // Array de ejemplo
const array = [1, 2, 3, 4, 5, 6, 7];

  // Callback que define la condición de parada
const callback = function (element) {
    return element < 5;
}

  // Llamar a la función dropWhile y almacenar el resultado
const newArray = dropWhile(array, callback);

  // Imprimir el resultado
console.table(newArray);