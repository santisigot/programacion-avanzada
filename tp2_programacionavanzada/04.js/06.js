// Crea una función llamada sumarElementos que tome un array de
// números y devuelva la suma de todos los elementos del array
// usando reduce.

function sumarElementos(array) {
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  

  const numeros = [1, 2, 3, 4, 10];
  const sumaTotal = sumarElementos(numeros);
  console.log(sumaTotal); 
  