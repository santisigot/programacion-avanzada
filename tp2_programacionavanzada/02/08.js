// Crea una función llamada procesarArray que tome un array y una
// función como parámetros, y aplique la función a cada elemento del
// array. Usa una función como parámetro para multiplicar cada
// número por 2.

function procesarArray(array, funcion) {
    return array.map(funcion);
}

function multiplicarPorDos(numero) {
    return numero * 2;
}


let numeros = [1, 2, 3, 4, 5];
let resultados = procesarArray(numeros, multiplicarPorDos);

console.log(resultados); 
