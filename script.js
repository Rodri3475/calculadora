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
