// 13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla.


// Crear una nueva Promise


// Creamos una nueva Promesa y la asignamos a la constante 'promise'
const promise = new Promise((resolve, reject) => {
    // Usamos setTimeout para simular una operación asíncrona que tarda 3 segundos en completarse
    setTimeout(() => {
      // Llamamos a resolve para marcar la Promesa como resuelta y pasar el valor 'Promise resuelta'
    resolve('Promise resuelta');
    }, 3000);
});

  // Encadenamos un then a la Promesa 'promise'
  // La función pasada a then se ejecutará cuando la Promesa se resuelva
promise.then((res) => {
    // Mostramos en la consola el valor con el que se resolvió la Promesa
    console.log(res);
});

