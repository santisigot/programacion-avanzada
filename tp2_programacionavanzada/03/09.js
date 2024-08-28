// Crea una función llamada generarToken que tome un objeto usuario
// y devuelva un token JWT simulado como una cadena. Puedes usar
// una función como btoa (Base64) para simular la generación del
// token.




function generarToken(usuario) {
    const polenta = window.btoa(usuario)
    return polenta    
}
const usuario = "polenta"

console.log(generarToken(usuario))