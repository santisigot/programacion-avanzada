// Procesamiento de Datos de una API:
// ○ Usando la función obtenerUsuarios, crea otra función llamada
// imprimirNombresDeUsuarios que filtre y muestre solo los nombres
// de los usuarios.

function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
}
function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

function imprimirNombresDeUsuarios() {
    obtenerUsuarios()
        .then(usuarios => {
            const nombres = usuarios.map(usuario => usuario.name);
            console.log(nombres);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
imprimirNombresDeUsuarios();
