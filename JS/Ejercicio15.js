// 15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".


// Creamos una nueva Promise.
const Promesa = new Promise((resolve, reject) => {
    // Dentro de la función de la Promise, configuramos un temporizador
    // que se ejecutará después de 2 segundos.
    setTimeout(() => {
      // Cuando se cumple el temporizador, rechazamos la Promise
      // pasando un nuevo Error como argumento al método reject.
    reject(new Error("Promise rechazada"));
    }, 2000);
});

  // Luego, adjuntamos un manejador de éxito a la Promise utilizando el método then.
Promesa.then((response) => {
    // Si la Promise se resuelve (lo cual no sucederá en este caso),
    // el mensaje de respuesta se imprime en la consola.
    console.log(response);
}).catch((error) => {
    // Si la Promise se rechaza, capturamos el error y lo imprimimos en la consola.
    // Aquí usamos console.error para indicar claramente que es un mensaje de error.
    console.error("Error:", error.message);
});
