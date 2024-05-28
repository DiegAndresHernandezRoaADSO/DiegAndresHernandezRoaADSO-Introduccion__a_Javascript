// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// // lista de elementos uno por uno


// Ejemplo de función asincrónica que simula una llamada a una API
async function processElement(element) {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Processing element: ${element}`);
        resolve(`Processed: ${element}`);
      }, 1000); // Simula un retardo de 1 segundo
    });
}

// Función principal para procesar la lista de elementos uno por uno
async function processList(elements) {
    for (let i = 0; i < elements.length; i++) {
    const result = await processElement(elements[i]);
    console.log(result);
    }
}

  // Lista de elementos a procesar
const elements = ['a', 'b', 'c', 'd', 'e'];

  // Llamada a la función principal
processList(elements);