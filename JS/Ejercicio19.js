// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica

// Definir la función asincrónica
async function fetchData() {
    try {
      // Realizar la llamada al archivo JSON local
    const response = await fetch('Ejercicio19.json');

      // Verificar si la respuesta es exitosa
    if (response.ok) {
        // Convertir la respuesta a formato JSON
        const data = await response.json();

        // Manipular los datos para mostrar información específica
        data.forEach(item => {
            console.log(`Nombre: ${item.nombre}, Edad: ${item.edad}`);
        });
    } else {
        console.error('Error al obtener los datos');
    }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

  // Llamar a la función para ejecutarla
fetchData();

