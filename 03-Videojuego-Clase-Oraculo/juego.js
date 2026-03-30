// ============================================================
//  VIDEOJUEGO — El Oráculo
//  Demostración en vivo: while, if/else, variables, DOM básico
// ============================================================

// --- Estado del juego ---
let numeroSecreto = generarNumero();
let intentos = 0;
let juegoActivo = true;

function generarNumero() {}

function adivinar() {}

function reiniciar() {}

// --- Helpers de UI ---
function mostrarMensaje(texto) {}

function mostrarIntentos(texto) {}

// Permitir presionar Enter para adivinar
document
  .getElementById("inputNumero")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") adivinar();
  });
