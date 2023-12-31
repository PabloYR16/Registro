// El código presentado,  es una  validación de formulario, se capturan las referencias de diferentes elementos del formulario, como los campos de entrada de texto y botones.  Luego, se agrega un evento de escucha al formulario  para interceptar el evento de envío.
// Dentro del evento de envío, se realizan diferentes validaciones en los campos del formulario utilizando expresiones regulares. Se verifican condiciones como la longitud mínima, el formato y los caracteres permitidos en cada campo. Si alguna de las condiciones no se cumple, se agregan mensajes de advertencia a una variable warnings.
// Al final, se verifica si la variable entrar es true, lo que indica que se encontraron errores de validación, en ese caso se muestra un mensaje de advertencia. Si no hay errores de validación, se muestra un mensaje de éxito de envío.

// Obtener referencias a los elementos del formulario
const usuario = document.getElementById("usuario")
const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirmpassword")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

// Agregar un evento de escucha al formulario cuando se envía
form.addEventListener("submit", e => {
    e.preventDefault() // Evitar que el formulario se envíe automáticamente

    let warnings = "" // Variable para almacenar los mensajes de advertencia
    let entrar = false // Variable para determinar si se deben mostrar las advertencias
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // Expresión regular para validar el formato de correo electrónico
    let regexUsuario = /^[a-zA-Z0-9]+$/; // Expresión regular para validar el formato de usuario
    let regexLetras = /^[A-Za-z\s]+$/; // Expresión regular para validar que solo se ingresen letras
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&{}()[\]^<>\\|_~.'"#,])([A-Za-z\d@$!%*?&{}()[\]^<>\\|_~.'"#,]){8,}$/; // Expresión regular para validar la contraseña

    parrafo.innerHTML = ""; // Limpiar el contenido del párrafo de advertencias

    // Validar el campo usuario
    if (usuario.value.trim() === '') {
        warnings += 'El campo usuario no puede estar vacío<br>';
        entrar = true;
    }

    if (usuario.value.length < 4 || !regexUsuario.test(usuario.value)) {
        warnings += 'El usuario no es válido<br>';
        entrar = true;
    }

    // Validar el campo nombre
    if (nombre.value.trim() === '') {
        warnings += 'El campo nombre no puede estar vacío<br>';
        entrar = true;
    } else if (!regexLetras.test(nombre.value)) {
        warnings += 'El campo nombre solo puede contener letras<br>';
        entrar = true;
    }

    // Validar el campo apellido
    if (apellido.value.trim() === '') {
        warnings += 'El campo apellido no puede estar vacío<br>';
        entrar = true;
    } else if (!regexLetras.test(apellido.value)) {
        warnings += 'El campo apellido solo puede contener letras<br>';
        entrar = true;
    }

    // Validar el campo email
    if (!regexEmail.test(email.value)) {
        warnings += 'El email no es valido <br>'
        entrar = true
    }

    // Validar el campo contraseña
    if (password.value.length < 8) {
        warnings += 'La contraseña debe tener al menos 8 caracteres<br>';
        entrar = true;
    } else if (!regexPassword.test(password.value)) {
        warnings += 'La contraseña debe contener al menos una mayúscula, una minúscula, un número y un símbolo<br>';
        entrar = true;
    }

    // Validar el campo confirmar contraseña
    if (confirmpassword.value !== password.value) {
        warnings += 'Las contraseñas no coinciden<br>';
        entrar = true;
    }

    // Mostrar las advertencias o mensaje de envío según sea necesario
    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})
