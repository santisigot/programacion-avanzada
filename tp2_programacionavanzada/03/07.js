// Crea una función llamada enviarDatos que tome un objeto data y
// haga una petición POST a la API
// https://jsonplaceholder.typicode.com/posts. La función debe
// imprimir la respuesta de la API.


async function enviarDatos(data) {}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  
enviarDatos()

// const data = {
//     userID: 77,
//     id: 42,
//     title: "cerru",
//     body: "potosi"
// };

// console.log(data)