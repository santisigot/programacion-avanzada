// Copiar Objetos:
// Crea una copia profunda del objeto estudiante utilizando el método
// JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
// original no haya sido alterado.

let estudiante = {
    nombre: 'David',
    edad: 25
};


const copia = JSON.stringify({estudiante})
console.log(copia)

let copiaObject = JSON.parse(copia)
console.log(copiaObject)

copiaObject = {
    ...estudiante, nombre: "polenta"
}
console.log(copiaObject)
console.log(estudiante)