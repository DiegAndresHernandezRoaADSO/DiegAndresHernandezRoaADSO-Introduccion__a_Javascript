// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await

// Definición de una función asincrónica
async function asincrónica() {
    // Imprime un mensaje indicando el inicio de la función
    console.log("iniciando funcion")

    // Utiliza 'await' para esperar a que la Promesa se resuelva después de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Imprime un mensaje indicando que la operación se ha completado
    console.log("Operación completada")

    // La función termina aquí. No devuelve explícitamente ningún valor (implícitamente devuelve undefined)

    return;
}

  // Llamada a la función asincrónica
asincrónica().then(result => {
    // Imprime el resultado de la función asincrónica, que en este caso es 'undefined'
    console.log(result); // Aquí se imprimirá 'undefined' ya que la función no devuelve ningún valor
});