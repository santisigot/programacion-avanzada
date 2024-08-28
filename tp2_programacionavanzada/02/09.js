// Función que Devuelve Otra Función:
// ○ Crea una función llamada crearMultiplicador que tome un número x
// y devuelva una nueva función que multiplique cualquier número por
// x.


function crearMultiplicador(x) {
    return function (y) {
        return y * x;
    }
}

let resultado = crearMultiplicador(5);
console.log(resultado(3));