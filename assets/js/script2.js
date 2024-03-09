const buttons = document.querySelectorAll("button")
const box = document.querySelector("#caja")

document.addEventListener("DOMContentLoaded", ()=>{
    // Se itera el array de botones
    for(let i=0 ; i<buttons.length; i++){
        // Cada boton de indice i se le añade el evento click
        buttons[i].addEventListener("click", ()=>{ 
            let color = buttons[i].style.backgroundColor // Se obtiene el backgroundcolor del estilo del boton y se almacena en la variable color
            box.style.backgroundColor = color // Se le asigna el color de la variable color y se le aplica al backgroundcolor del estilo de la caja
        })
    }
})