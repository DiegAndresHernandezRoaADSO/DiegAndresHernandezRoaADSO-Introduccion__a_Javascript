// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.


// Definición de una función llamada "mimap" que recibe un array y un callback
const mimap = function (array, callback) {
    let arreglo = []; // Crear un nuevo array para almacenar los resultados
    // Iterar sobre cada elemento del array de entrada
    for (let i = 0; i < array.length; i++) {
      // Aplicar la función callback a cada elemento y almacenar el resultado
    arreglo.push(callback(array[i]));
    }
    return arreglo; // Devolver el nuevo array con los resultados transformados
}

  // Ejemplo de uso de la función "mimap" con un array y una función de callback
console.table(mimap([1, 2, 3, 4, 5], function (elemento) {
    return elemento * 2; // Multiplicar cada elemento por 2
}));



