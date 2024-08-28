// Función que Modifica un Objeto:
// ○ Crea una función llamada actualizarEdad que tome un objeto
// persona y un número nuevaEdad, y actualice la propiedad edad del
// objeto.

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}


let persona = { nombre: "Juan", edad: 25 };
console.log(persona); 

actualizarEdad(persona, 30);
console.log(persona); 
