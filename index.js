const lampada = document.querySelector('img')
const span = document.querySelector('span')

let lampadaAcesa = false

lampada.addEventListener("click", () => {
    lampadaAcesa = !lampadaAcesa

    if (lampadaAcesa) {
        lampada.src = "../image/lampada.acesa.png"
        span.className = "on"
        span.textContent = "Acesa"
    } else {
        lampada.src = "../image/lampada.apagada.png"
        span.className = "off"
        span.textContent = "Apagada"
    }
})