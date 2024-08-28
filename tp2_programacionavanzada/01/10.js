// Añade un getter y un setter al objeto libro para la propiedad
// añoDePublicacion. Usa el setter para actualizar el año de publicación
// y luego usa el getter para leerlo.

let libro = {
    autor: "J. R. R. Tolkien",   
    añoDePublicacion: 2000,
    titulo: "El Hobbit",
    descripcion: "El libro de El Hobbit fue escrito por J. R. R. Tolkien",

    set setAño(nuevo){
        this.añoDePublicacion = nuevo
    },

    get getAño(){
        return this.añoDePublicacion
    },
};

libro.setAño = 1999
console.log(libro.getAño)
