// Crea una función llamada filtrarMayoresDe que tome un array de
// números y un valor de referencia, y devuelva un nuevo array solo con
// los números mayores que ese valor. Usa filter.

function filtrarMayoresDe(array, valorReferencia) {
    return array.filter(numero => numero > valorReferencia);
  }
  
  const numeros = [1, 2, 3, 12765, 0];
  const valorReferencia = 2;
  const mayoresDeValor = filtrarMayoresDe(numeros, valorReferencia);
  console.log(mayoresDeValor); 
  