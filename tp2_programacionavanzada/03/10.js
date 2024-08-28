// Crea una función llamada actualizarUsuario que tome un objeto
// usuario y una lista de cambios a aplicar. La función debe retornar el
// usuario con las propiedades actualizadas.
function actualizarUsuario(usuario, cambios) {
    const usuarioActualizado = { ...usuario };
    for (const [key, value] of Object.entries(cambios)) {
        usuarioActualizado[key] = value;
    }
    
    return usuarioActualizado;
}
const usuario = {
    id: 1,
    nombre: "santiago",
    email: "loane@gmail.com",
    edad: 25
};

const cambios = {
    nombre: "goku",
    edad: 26
};

const usuarioModificado = actualizarUsuario(usuario, cambios);
console.log(usuarioModificado);

