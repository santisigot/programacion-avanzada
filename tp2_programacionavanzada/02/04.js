// Función que Devuelve un Objeto:
// ○ Crea una función llamada crearPersona que tome nombre y edad
// como parámetros y devuelva un objeto con esas propiedades.

function crearPersona (nombre, edad){
    return { nombre, edad }
}

let persona = crearPersona("santiago", 25)
console.log(persona)