// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.


// Definimos una función asíncrona llamada leerArchivoJson que toma un parámetro rutaArchivo


// Función para leer un archivo JSON desde una ruta especificada y manejar posibles errores.
async function readJsonFile(filePath) {
    try {
      const response = await fetch(filePath); // Realiza la solicitud para obtener el archivo JSON.
      if (!response.ok) throw new Error(`Error: ${response.statusText}`); // Verifica si la respuesta es correcta.
      return await response.json(); // Convierte la respuesta a un objeto JSON.
    } catch (error) {
      console.error(`Error: ${error.message}`); // Muestra un mensaje de error en la consola.
      return null; // Retorna null en caso de error.
    }
}

  // Ejemplo de uso
const filePath = 'Ejercicio23.json';
readJsonFile(filePath).then(data => {
    if (data) {
      console.log("Archivo JSON leído correctamente:", data); // Muestra el contenido del archivo JSON.
    } else {
      console.log("No se pudo leer el archivo JSON."); // Muestra un mensaje si no se pudo leer el archivo.
    }
});
