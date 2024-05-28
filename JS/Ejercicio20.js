// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto


// Se define una nueva promesa (promesa1) que se resolverá después de 1 segundo.
const promesa1 = new Promise((aceptado, rechazado) => {
    setTimeout(() => {
    aceptado('Promesa 1 resuelta');
    }, 1000);
});

  // Se define otra promesa (promesa2) que se resolverá después de 2 segundos.
const promesa2 = new Promise((aceptado, rechazado) => {
    setTimeout(() => {
        aceptado('Promesa 2 resuelta');
    }, 2000);
});

  // Se define una tercera promesa (promesa3) que se resolverá después de 3 segundos.
const promesa3 = new Promise((aceptado, rechazado) => {
    setTimeout(() => {
        aceptado('Promesa 3 resuelta');
    }, 3000);
});

// Se utiliza Promise.all() para esperar a que todas las promesas se resuelvan.
Promise.all([promesa1, promesa2, promesa3]).then((resultado) => {
    // Una vez que todas las promesas se resuelven, se ejecuta esta función de "then".
    // El parámetro "resultado" es un array que contiene los valores resueltos de todas las promesas.
    console.log(`Las ${resultado} se han resuelto`);
});
