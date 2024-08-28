// Crea una función llamada obtenerUsuarios que haga una petición
// HTTP a la API https://jsonplaceholder.typicode.com/users usando
// fetch. Luego, imprime en la consola la lista de usuarios obtenida.

function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
}

console.log(obtenerUsuarios())