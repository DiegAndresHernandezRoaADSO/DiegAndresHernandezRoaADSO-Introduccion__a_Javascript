// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.



// Función para mostrar un intervalo de números
function sl_interval(desde, hasta) {
    let actual = desde;
    let tiempo = setInterval(function () {
      console.log(actual); // Muestra el número actual en la consola
    if (actual == hasta) {
        clearInterval(tiempo); // Detiene el intervalo cuando se alcanza el número final
    }
      actual++; // Incrementa el número actual
    }, 1000); // Intervalo de 1 segundo
}

  sl_interval(1, 50); // Llama a la función para mostrar los números del 1 al 50

  // Función para mostrar un intervalo de números con setTimeout
function sl_timeout(desde, hasta) {
    let actual = desde;

    setTimeout(function ejecutar() {
      console.log(actual); // Muestra el número actual en la consola
    if (actual < hasta) {
        setTimeout(ejecutar, 1000); // Llama a la función recursivamente con un intervalo de 1 segundo
    }

      actual++; // Incrementa el número actual
    }, 1000); // Intervalo de 1 segundo
}

  sl_timeout(1, 100); // Llama a la función para mostrar los números del 1 al 100
