// Crea una función llamada buscarUsuarioPorEmail que tome un array
// de usuarios y un email como parámetros, y devuelva el usuario que
// coincida con el email proporcionado. Usa el método find para
// implementarlo.

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

const usuarios = [
    {usuario: "pepito", email: "pepito@gmail.com"}, 
    {usuario: "pepito2", email: "pepito2@gmail.com"},
];

const finduser = buscarUsuarioPorEmail(usuarios, "pepito69@gmail.com");
if (finduser) {
    console.log(finduser);
} else {
    console.error('Error: Usuario con el email proporcionado no encontrado.');
}

