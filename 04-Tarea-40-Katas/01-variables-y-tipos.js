/* ==========================================================================
   01 — Variables y Tipos de Datos | 10 Katas
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — La Suma
   Recibís dos números. Sumalos y retorná el resultado.
-------------------------------------------------------------------------- */
function sumar(a, b) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 2 — La Resta
   Recibís dos números. Réstalos (a - b) y retorná el resultado.
-------------------------------------------------------------------------- */
function restar(a, b) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 3 — Concatenación de Nombre
   Recibís un nombre y un apellido. Unilos con un espacio en el medio.
   Ej: ("Juan", "Pérez") → "Juan Pérez"
-------------------------------------------------------------------------- */
function unirNombre(nombre, apellido) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 4 — Saludo con Template Literal
   Recibís un nombre y una edad. Retorná el string:
   "Hola, soy [nombre] y tengo [edad] años."
-------------------------------------------------------------------------- */
function crearSaludo(nombre, edad) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 5 — El Detective de Tipos
   Recibís un valor desconocido. Retorná su tipo de dato usando typeof.
-------------------------------------------------------------------------- */
function detectarTipo(valor) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 6 — Conversión de Tipo
   Recibís un número en formato string (ej: "42").
   Convertílo a número y retornalo.
-------------------------------------------------------------------------- */
function convertirANumero(str) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 7 — Longitud del String
   Recibís un string. Retorná su longitud (sin recortar espacios).
-------------------------------------------------------------------------- */
function calcularLongitud(str) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 8 — Todo en Mayúsculas
   Recibís un string. Retornalo convertido a mayúsculas.
-------------------------------------------------------------------------- */
function aMayusculas(str) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 9 — Área del Círculo
   Recibís el radio de un círculo. Calculá y retorná su área.
   Fórmula: Math.PI * radio * radio
   Tip: redondeá a 2 decimales con: Math.round(resultado * 100) / 100
-------------------------------------------------------------------------- */
function calcularAreaCirculo(radio) {
  // TU CÓDIGO AQUÍ 👇
}

/* --------------------------------------------------------------------------
   KATA 10 — Verificar NaN
   Recibís un valor. Retorná true si es NaN, false si no lo es.
   Tip: usá la función isNaN().
-------------------------------------------------------------------------- */
function verificarNaN(valor) {
  // TU CÓDIGO AQUÍ 👇
}

// 🚨 ¡NO TOCAR ESTA LÍNEA! Necesaria para los tests.
module.exports = {
  sumar,
  restar,
  unirNombre,
  crearSaludo,
  detectarTipo,
  convertirANumero,
  calcularLongitud,
  aMayusculas,
  calcularAreaCirculo,
  verificarNaN,
};
