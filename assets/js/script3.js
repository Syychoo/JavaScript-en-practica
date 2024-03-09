const result = document.querySelector(".resultado")
const inputValor1 = document.querySelector("#valor1")
const inputValor2 = document.querySelector("#valor2")
const buttonAdd = document.querySelector("#btn-sumar")
const buttonSubtract = document.querySelector("#btn-restar")

document.addEventListener("DOMContentLoaded", () => {
    buttonAdd.addEventListener("click", () => {
        let valor1 = parseFloat(inputValor1.value)
        let valor2 = parseFloat(inputValor2.value)
        result.textContent = valor1 + valor2
    })
    buttonSubtract.addEventListener("click", () => {
        let valor1 = parseFloat(inputValor1.value)
        let valor2 = parseFloat(inputValor2.value)
        let resultado = valor1 - valor2

        if (resultado < 0) {
            resultado = 0
        }

        result.textContent = resultado
    })
})