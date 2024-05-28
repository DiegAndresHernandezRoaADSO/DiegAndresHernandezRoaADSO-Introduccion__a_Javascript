// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true




function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
        return true;
    }
}
    return false;
}

  // Ejemplo de uso:
const array = [1, 2, 3, 4, 5];

  // Callback que verifica si un número es mayor que 3
function isGreaterThanThree(num) {
    return num > 3;
}

  console.log(some(array, isGreaterThanThree)); // true