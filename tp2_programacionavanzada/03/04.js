// Transformación de Datos:
// ○ Crea una función llamada mapearUsuarios que tome un array de
// usuarios obtenidos de la API y devuelva un nuevo array con solo las
// propiedades nombre y email de cada usuario.

// Función para obtener la lista de usuarios desde la API
function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
        return {
            nombre: usuario.name,
            email: usuario.email
        };
    });
}


obtenerUsuarios().then(usuarios => {
    const usuariosMapeados = mapearUsuarios(usuarios);
    console.log(usuariosMapeados);
});

