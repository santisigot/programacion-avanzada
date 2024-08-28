// Función Recursiva:
// ○ Crea una función recursiva llamada factorial que calcule el factorial
// de un número dado.

function factorial(a){
     if(a == 0 || a == 1){
        return 1
}else{
    return a * factorial(a -1)
} 
}

let resultado = factorial(15)
console.log(resultado)