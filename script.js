/* Calculadora base */
const pantalla = document.getElementById("pantalla");

function agregar(valor) {
    if (pantalla.textContent === "0") {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
}

function limpiar() {
    pantalla.textContent = "0";
}

function calcular() {
    try {
        pantalla.textContent = eval(pantalla.textContent);
    } catch (error) {
        pantalla.textContent = "Error";
    }
}

/* Calculadora Cientifica */
const boton = document.getElementById("toggleCientifica");
const panel = document.getElementById("cientifica");

boton.addEventListener("click", () => {
    panel.classList.toggle("activa");
});

/* Calculadora Cientifica con boton de Retroceso */
function borrarUltimo() {
    let texto = pantalla.textContent;

    if (texto !== "0") {
        texto = texto.slice(0, -1);

        pantalla.textContent = texto || "0";
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        borrarUltimo();
    }
});