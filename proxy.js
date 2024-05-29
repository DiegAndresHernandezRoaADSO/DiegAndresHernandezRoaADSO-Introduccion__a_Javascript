const handler = {
  set: function (objeto, propiedad, valor) {
    if (propiedad === "age" && typeof valor === "number") {
      objeto[propiedad] = valor;
    }
    
}


}
console.log("Hola") 