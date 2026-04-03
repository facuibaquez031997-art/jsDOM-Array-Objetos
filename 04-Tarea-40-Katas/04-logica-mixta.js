/* ==========================================================================
   04 — Lógica Mixta | 10 Katas
   Combinás variables, condicionales y bucles.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 31 — FizzBuzz Extendido
   Dado un número, retorná:
   - "Fizz"         si es múltiplo de 3
   - "Buzz"         si es múltiplo de 5
   - "Bazz"         si es múltiplo de 7
   - "FizzBuzz"     si es múltiplo de 3 y 5
   - "FizzBazz"     si es múltiplo de 3 y 7
   - "BuzzBazz"     si es múltiplo de 5 y 7
   - "FizzBuzzBazz" si es múltiplo de 3, 5 y 7
   - El número como string si no cumple ninguna regla. Ej: fizzBuzzExtendido(2) → "2"
-------------------------------------------------------------------------- */
function fizzBuzzExtendido(n) {
  // TU CÓDIGO AQUÍ 👇
  if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
    return "FizzBuzzBazz";
  } else if (n % 5 === 0 && n % 7 === 0) {
    return "BuzzBazz";
  } else if (n % 3 === 0 && n % 7 === 0) {
    return "FizzBazz";
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 7 === 0) {
    return "Bazz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  };
  return String(n);
};

/* --------------------------------------------------------------------------
   KATA 32 — Descuento en Carrito
   Dado un array de precios, calculá el total.
   Si el total SUPERA 5000, aplicá un descuento del 15%.
   Retorná el precio final a pagar.
-------------------------------------------------------------------------- */
function calcularTotal(precios) {
  let total = 0;

  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }

  if (total > 5000) {
    total = total * 0.85;
  }

  return total;
}
/* --------------------------------------------------------------------------
   KATA 33 — Contador de Pares e Impares
   Dado un límite, contá cuántos pares e impares hay del 1 al límite.
   Retorná un objeto: { pares: X, impares: Y }
   Ej: contarParesEImpares(6) → { pares: 3, impares: 3 }
-------------------------------------------------------------------------- */
function contarParesEImpares(limite) {
  let pares = 0;
  let impares = 0;

  for (let i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  return { pares, impares };
}
/* --------------------------------------------------------------------------
   KATA 34 — Palabras en Mayúsculas
   Dado un string con varias palabras, dividílo por espacios y retorná
   un array con cada palabra convertida a mayúsculas.
   Ej: palabrasEnMayusculas("hola mundo") → ["HOLA", "MUNDO"]
-------------------------------------------------------------------------- */
function palabrasEnMayusculas(oracion) {
  const palabras = oracion.split(" ");
  const resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    resultado.push(palabras[i].toUpperCase());
  }

  return resultado;
}

/* --------------------------------------------------------------------------
   KATA 35 — Clasificar Número
   Dado un número, retorná un objeto con dos propiedades:
   - esPar: true si es par, false si es impar.
   - mayorQueCinco: true si es mayor que 5, false si no.
   Ej: clasificarNumero(8) → { esPar: true, mayorQueCinco: true }
-------------------------------------------------------------------------- */
function clasificarNumero(numero) {
  return {
    esPar: numero % 2 === 0,
    mayorQueCinco: numero > 5
  };
}
/* --------------------------------------------------------------------------
   KATA 36 — Divisibles por 3 pero no por 9
   Dado un límite, retorná un array con todos los números del 1 al límite
   que sean divisibles por 3 pero NO por 9.
   Ej: divisiblesPor3NoNueve(20) → [3, 6, 12, 15]
-------------------------------------------------------------------------- */
function divisiblesPor3NoNueve(limite) {
  // TU CÓDIGO AQUÍ 👇
  const resultado = [];

  for (let i = 1; i <= limite; i++) {
    if (i % 3=== 0 && i % 9 !== 0) {
      resultado.push(i);
    };
  };
  return resultado;
};

/* --------------------------------------------------------------------------
   KATA 37 — Conversión de Temperatura
   Dado una temperatura en Celsius, retorná un objeto con:
   - fahrenheit: C * 9/5 + 32  (redondeado a 2 decimales)
   - kelvin: C + 273.15
   Ej: convertirTemperatura(100) → { fahrenheit: 212, kelvin: 373.15 }
-------------------------------------------------------------------------- */
function convertirTemperatura(celsius) {
  const fahrenheit = Math.round((celsius * 9/5 + 32) * 100) / 100;
  const kelvin = celsius + 273.15;

  return {
    fahrenheit,
    kelvin
  };
}
/* --------------------------------------------------------------------------
   KATA 38 — Contar Tiradas de Dado
   Dado un array de tiradas (números del 1 al 6), retorná un objeto
   que cuente cuántas veces salió cada número (del 1 al 6).
   Ej: contarTiradas([1, 2, 1, 3, 1, 6]) → { 1: 3, 2: 1, 3: 1, 4: 0, 5: 0, 6: 1 }
-------------------------------------------------------------------------- */
function contarTiradas(tiradas) {
  // TU CÓDIGO AQUÍ 👇
  const resultado = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  for (const tirada of tiradas) {
    if (resultado.hasOwnProperty(tirada)) {
      resultado[tirada]++;
    }
  }

  return resultado;
}

/* --------------------------------------------------------------------------
   KATA 39 — Divisores de un Número
   Dado un número entero positivo, retorná un array con todos sus divisores
   en orden ascendente.
   Ej: obtenerDivisores(12) → [1, 2, 3, 4, 6, 12]
-------------------------------------------------------------------------- */
function obtenerDivisores(numero) {
  // TU CÓDIGO AQUÍ 👇
  const divisores = [];

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  } 
  return divisores;
}

/* --------------------------------------------------------------------------
   KATA 40 — DESAFÍO FINAL: Adivina el Número
   Dado un número secreto y un array de intentos, retorná un array
   con el resultado de cada intento:
   - "Demasiado bajo"  si el intento es menor al secreto.
   - "Demasiado alto"  si el intento es mayor al secreto.
   - "¡Correcto!"      si el intento es igual al secreto.
   Ej: adivinarNumero(10, [5, 15, 10]) → ["Demasiado bajo", "Demasiado alto", "¡Correcto!"]
-------------------------------------------------------------------------- */
function adivinarNumero(secreto, intentos) {
  // TU CÓDIGO AQUÍ 👇
  const resultados = [];

  for (const intento of intentos) {
    if (intento < secreto) {
      resultados.push("Demasiado bajo");
    } else if (intento > secreto) {
      resultados.push("Demasiado alto");
    } else {
      resultados.push("¡Correcto!");
    }
  }

  return resultados;
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  fizzBuzzExtendido,
  calcularTotal,
  contarParesEImpares,
  palabrasEnMayusculas,
  clasificarNumero,
  divisiblesPor3NoNueve,
  convertirTemperatura,
  contarTiradas,
  obtenerDivisores,
  adivinarNumero,
};
