// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.


// Crear la primera promesa que se resuelve después de 1 segundo y devuelve 1
const Promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(1);
    }, 1000);
});

  // Crear la segunda promesa que se resuelve después de 1 segundo y devuelve 5
const Promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(5);
}, 1000);
});

  // Crear la tercera promesa que se resuelve después de 1 segundo y devuelve 4
const Promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(4);
    }, 1000);
});

  // Encadenar las tres promesas y sumar los resultados cuando todas se resuelvan
Promise.all([Promesa1, Promesa2, Promesa3]).then((resultados) => {
    // Sumar los resultados y mostrar el resultado final
    console.log(resultados.reduce((a, b) => a + b, 0));
});