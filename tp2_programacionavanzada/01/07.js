// Elimina la propiedad disponible del objeto producto. Imprime el
// objeto antes y después de eliminar la propiedad.

let producto = {
    nombre: "PlayStation 5",
    precio: 600,
    disponible: true
};

console.log(producto);
delete producto.disponible;
console.log(producto);