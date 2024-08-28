// Crea una función llamada elevarAlCuadrado que tome un array de
// números y devuelva un nuevo array con cada número elevado al
// cuadrado. Usa map para implementar la función.
function elevarAlCuadrado(array) {
    return array.map(numero => numero * numero);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosAlCuadrado = elevarAlCuadrado(numeros);
  console.log(numerosAlCuadrado); 
  