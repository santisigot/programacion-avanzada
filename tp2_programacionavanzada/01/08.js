// Combinar Objetos:
// ○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
// en un nuevo objeto. Imprime el resultado.

let persona1 = {
    nombre: "Juan",
    edad: 25
};

let persona2 = {
    profesion: "Mariá",
    empleo: true,
};

let persona3 = Object.assign({}, persona1, persona2);
console.log(persona3);