// 25. Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola







// Definimos las funciones de validación para diferentes tipos de datos
const validators = {
    numeric: value => !isNaN(value),
    alphanumeric: value => /^[a-zA-Z]+$/.test(value),
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    date: value => !isNaN(Date.parse(value))
};

  // Creamos un proxy handler para gestionar la validación
const handler = {
    set(target, prop, value) {
      // Eliminamos espacios en blanco al inicio y al final
    if (typeof value === 'string') {
        value = value.trim();
    }

      // Comprobamos el tipo de dato esperado para la propiedad
    const expectedType = target._types[prop];
    if (expectedType && !validators[expectedType](value)) {
        console.error(`Error: El valor para ${prop} debe ser de tipo ${expectedType}.`);
        return false; // Cancelamos la asignación si la validación falla
    }

      // Asignamos el valor si pasa la validación
    target[prop] = value;
    return true;
    }
};

  // Creamos un objeto con propiedades y sus tipos esperados
const obj = new Proxy({
    _types: {
        edad: 'numeric',
        nombre: 'alphanumeric',
        correo: 'email',
        fechaNacimiento: 'date'
    }
}, handler);

  // Ejemplos de uso:
  obj.edad = 25;               // Válido
  obj.nombre = 'Juan';         // Válido
  obj.correo = 'juan@example.com'; // Válido
  obj.fechaNacimiento = '1990-01-01'; // Válido

  obj.edad = 'veinticinco';    // Error: El valor para edad debe ser de tipo numeric.
  obj.nombre = 'Juan123';      // Error: El valor para nombre debe ser de tipo alphanumeric.
  obj.correo = 'juan.com';     // Error: El valor para correo debe ser de tipo email.
  obj.fechaNacimiento = 'hoy'; // Error: El valor para fechaNacimiento debe ser de tipo date.
