// Crea una función llamada tienePropiedad que tome un objeto y una
// cadena como parámetros, y devuelva true si el objeto tiene una
// propiedad con ese nombre, o false en caso contrario.

function tienePropiedad(objeto, cadena) {
    return cadena in objeto;
}

let producto = {
    nombre: "PlayStation 5",
    precio: 600,
    disponible: true
};

console.log(tienePropiedad(producto, "nombre")); 
console.log(tienePropiedad(producto, "color"));  
console.log(tienePropiedad(producto, "precio"));  
console.log(tienePropiedad(producto, "disponible"));  
console.log(tienePropiedad(producto, "version"));  
