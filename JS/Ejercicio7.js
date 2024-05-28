// 7. Crear una función find que acepte un array y un callback y que:

// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined



const animales = ["gato", "perro", "ardilla", "vaca"];

// Utilizando el método 'find' para buscar un animal que no incluya la palabra "perro"
const resultado = animales.find(function (animal) {
    return !animal.includes("perro");
})

console.log(resultado); // Imprime el primer animal que cumple la condición