// Validación de Formularios:
// ○ Crea una función llamada validarFormulario que tome un objeto con
// los campos nombre, email y password. La función debe devolver true


function validarFormulario(campos) {
    const { nombre, email, password } = campos;
    if (!nombre || !email || !password) {
        return false;
    }
    return true;
}


const camposValidos = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    password: 'abc123'
};

const esValido = validarFormulario(camposValidos);
console.log(esValido); 


