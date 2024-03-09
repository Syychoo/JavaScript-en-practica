// querySelector = obtenemos los items
const inputName = document.querySelector("#nombre")
const errorName = document.querySelector(".errorNombre")
const inputTopic = document.querySelector("#asunto")
const errorTopic = document.querySelector(".errorAsunto")
const inputMessage = document.querySelector("#mensaje")
const errorMessage = document.querySelector(".errorMensaje")
const result = document.querySelector(".resultado")
const formulario = document.querySelector("#formulario")

// Esperamos que la pagina se haya cargado en su totalidad
document.addEventListener("DOMContentLoaded", () => {
    // Al ejecuta submit se ejecuta el codigo de validacion    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        let validInputs = true // Se espera que el usuario ingrese bien todos los datos
        // Resetea el contenido de los textos de error a vacio
        errorName.textContent = ""
        errorTopic.textContent = ""
        errorMessage.textContent = ""
        // Obtenemos los valores de los Input
        const textName = inputName.value
        const textTopic = inputTopic.value
        const textMessage = inputMessage.value

        const regex = /^[a-zA-Z]+$/ // Declaramos el regex que validará el contenido de los Inputs
        // Comprobamos si el usuario ingreso mal el nombre
        if (!regex.test(textName)) {
            errorName.textContent = "El nombre es requerido." // En el caso que si, se modifico el <p> para advertir error
            validInputs = false // Se setea validInput a false debido a que el usuario ingreso un valor invalido
        }
        // Comprobamos si el usuario ingreso mal el asunto
        if (!regex.test(textTopic)) {
            errorTopic.textContent = "El asunto es requerido" // En el caso que si, se modifico el <p> para advertir error
            validInputs = false // Se setea validInput a false debido a que el usuario ingreso un valor invalido
        }
        // Comprobamos si el usuario ingreso mal el mensaje
        if (!regex.test(textMessage)) {
            errorMessage.textContent = "El mensaje es requerido." // En el caso que si, se modifico el <p> para advertir error
            validInputs = false // Se setea validInput a false debido a que el usuario ingreso un valor invalido
        }
        // Comprobamos si el usuario ingreso algun campo invalido
        if (!validInputs) {
            result.textContent = "" // En el caso que si, se vacía el result
            return; // Se retorna en caso de que el contenido sea invalido evitando que se continue con el codigo
        }
        // Si llegamos aca significa que todos los campos son validos y result se rellena con mensaje para informar al usuario
        result.textContent = "Mensaje enviado con éxito!!!"
    })
}
)