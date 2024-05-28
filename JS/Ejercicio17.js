// 17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.


fetch('Ejercici17.json')
  // Cuando la respuesta llega, la convierte en formato JSON
.then(response => response.json())
  // Después de que los datos JSON estén disponibles, realiza estas acciones
.then(data => {
    // Muestra un mensaje en la consola
    console.log('Datos obtenidos:');
    // Muestra los datos JSON en la consola
    console.log(data);
})
  // Maneja cualquier error que pueda ocurrir durante el proceso de carga del archivo JSON
.catch(error => console.error('Error al cargar el archivo JSON:', error));