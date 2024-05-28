// 24. Crear un objeto proxy usando la clase Proxy

// Definición del objeto 'handler' que contiene una función 'get'
let handler = {
    // Método 'get' se activa cuando se intenta obtener una propiedad del Proxy
    get: function (target, name) {
      // Verifica si la propiedad existe en el objeto original
      // Si existe, devuelve su valor, de lo contrario, muestra un mensaje indicando que la propiedad no existe
    return name in target ? target[name] : `No existe la propiedad ${name}`;
    }
};

  // Objeto 'persona' con propiedades como nombre, apellido y edad
let persona = { nombre: `Diego`, apellido: `Hernandez`, edad: `20` };

  // Creación de un Proxy llamado 'proxy' que envuelve al objeto 'persona' y utiliza el 'handler' definido anteriormente
let proxy = new Proxy(persona, handler);

  // Acceso a algunas propiedades del objeto 'proxy' y salida en la consola
  console.log(proxy.nombre); // Salida: Diego
  console.log(proxy.apellido); // Salida: Hernandez
  console.log(proxy.edad); // Salida: 20

  // Intento de acceso a una propiedad inexistente ('email') del objeto 'proxy'
  console.log(proxy.email); // Salida: No existe la propiedad email

