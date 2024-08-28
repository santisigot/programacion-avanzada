function autenticarUsuario(credenciales) {
    if (credenciales.usuario === usuarioPredefinido.usuario &&
        credenciales.contraseña === usuarioPredefinido.contraseña) {
        return true;
    } else {
        return false; 
    }
}

const usuarioPredefinido = {
    usuario: 'admin',
    contraseña: '123456'
};


const credenciales = {
    usuario: 'admin',
    contraseña: '123456'
};
const autenticado = autenticarUsuario(credenciales);
console.log(autenticado); 
