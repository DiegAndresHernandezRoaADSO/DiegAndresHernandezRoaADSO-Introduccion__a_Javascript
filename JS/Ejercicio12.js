// 12. La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:



// Definimos una función llamada 'delay' que recibe un parámetro 'ms' (milisegundos)
function delay(ms) {
    // La función retorna una nueva Promesa
    return new Promise(resolve =>
      // Dentro de la Promesa, usamos setTimeout para esperar 'ms' milisegundos
    setTimeout(resolve, ms)
    );
}
  // Llamamos a la función 'delay' con un argumento de 3000 milisegundos (3 segundos)
  // Usamos 'then' para definir una función que se ejecutará cuando la Promesa se resuelva
delay(3000).then(() =>
    // Mostramos una alerta cuando la Promesa se resuelve después de 3 segundos
    alert("se ejecuta despues de 3 segundos")
);
