// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios(por ejemplo,
//   mostrar solo los nombres que comiencen con "A"


// Asegúrate de ejecutar esto en un entorno que soporte fetch para archivos locales (por ejemplo, un servidor local)
fetch('Ejercicio18.json')
.then(response => response.json())
.then(data => {
    // Filtrar los datos según tus criterios
    const filteredData = data.filter(item => item.name.startsWith('A'));

    // Mostrar los datos filtrados
    filteredData.forEach(item => {
    console.log(item.name);
    });
})
.catch(error => {
    console.error('Error:', error);
});

