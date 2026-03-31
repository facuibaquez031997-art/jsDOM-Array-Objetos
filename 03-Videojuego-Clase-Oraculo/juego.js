let numeroSecreto = generarNumero();
let intentos = 0;
let juegoActivo = true;

function generarNumero() {
  const aleatorio =Math.floor( Math.random() * 100 + 1);
  console.log(`Número aleatorio: ${aleatorio}`);
  return aleatorio;
};

generarNumero();

function adivinar() {

  let intento = Number(document.getElementById("inputNumero").value);

  console.log(`valor: ${intento}`);

  if (!intento || intento < 1 || intento > 100) {
    mostrarMensaje("Por favor, ingresa un número entre 1 y 100 para seguir JUGANDO!!!");
  }else if (intento === numeroSecreto) {
    mostrarMensaje(`¡Felicidades has adivinado el número secreto ${numeroSecreto} CAMPEON!`);
    mostrarIntentos(`Lo adivinaste en ${intentos} intentos!`);
    document.getElementById("btnReset").style.display = "block";
    juegoActivo=false;
  } else if (intento < numeroSecreto) {
    mostrarMensaje("El número secreto es mayor. Intenta de nuevo!");
    intentos++;
    mostrarIntentos(`intentos: ${intentos}`);
  } else if (intento > numeroSecreto) {
    mostrarMensaje("El número secreto es menor. Intenta de nuevo!");
    intentos++;
    mostrarIntentos(`intentos. ${intentos}`)
  };

};

adivinar();

function reiniciar() {
  numeroSecreto = generarNumero();
  intentos = 0;
  juegoActivo = true;
  mostrarMensaje("¡Nuevo juego! Adivina el número secreto entre 1 y 100.");
  mostrarIntentos();
  document.getElementById("inputNumero").value = "";
  document.getElementById("btnReset").style.display = "none";
}

reiniciar();

// --- Helpers de UI ---
function mostrarMensaje(texto) {
  document.getElementById("mensaje").textContent = texto;
}

mostrarMensaje();

function mostrarIntentos(texto) {
  document.getElementById("intentos").textContent = texto;
}

mostrarIntentos();

// Permitir presionar Enter para adivinar
document.getElementById("inputNumero").addEventListener("keydown", function (e) {
    if (e.key === "Enter") adivinar();
  });
