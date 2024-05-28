// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.


// Creamos una nueva promesa (promesa1) que se resolverá después de 1000 milisegundos.
const promesa1 = new Promise((aceptado, rechazado) => {
    setTimeout(aceptado, 1000, `promesa 1 resuelta`);
});

  // Creamos una nueva promesa (promesa2) que se resolverá después de 2000 milisegundos.
const promesa2 = new Promise((aceptado, rechazado) => {
    setTimeout(aceptado, 2000, `promesa 2 resuelta`);
});

  // Creamos una nueva promesa (promesa3) que se resolverá después de 3000 milisegundos.
const promesa3 = new Promise((aceptado, rechazado) => {
    setTimeout(aceptado, 3000, `promesa 3 resuelta`);
});

  // Utilizamos Promise.allSettled para esperar a que todas las promesas se resuelvan o rechacen.
Promise.allSettled([promesa1, promesa2, promesa3]).then((resultado) => {
    // Imprimimos el resultado en la consola.
    console.log(resultado);
});