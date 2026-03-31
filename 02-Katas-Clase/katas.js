// ============================================================
//  KATAS DE CLASE — Fundamentos de JavaScript
// ============================================================
//  Para ver los resultados: abrí la consola del navegador (F12)
// ============================================================

// ------------------------------------------------------------
// KATA 1 — FizzBuzz
// Imprimí los números del 1 al 20
//   - Si es múltiplo de 3 → "Fizz"
//   - Si es múltiplo de 5 → "Buzz"
//   - Si es múltiplo de ambos → "FizzBuzz"
//   - Si no es ninguno → el número
// ------------------------------------------------------------

console.log("--- KATA 1: FizzBuzz ---");

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // imprime "FizzBuzz" si es múltiplo de ambos
  } else if (i % 3 === 0) {
    console.log("Fizz"); // imprime "Fizz" si es múltiplo de 3
  } else if (i % 5 === 0) {
  
    console.log("Buzz"); // imprime "Buzz" si es múltiplo de 5
  } else {
    console.log(i);
  }
}

// ------------------------------------------------------------
// KATA 2 — Truthy / Falsy
// ¿Qué imprime cada console.log? Adiviná antes de correrlo.
// ------------------------------------------------------------

console.log("\n--- KATA 2: Truthy / Falsy ---");

let valores = [0, 1, "", "hola", null, undefined, false, true, NaN, [], {}];

valores.forEach((v) => {
  if (v) {
    console.log(v, "→ TRUTHY"); // me van a devolver los valores "hola", 1, true, [], {}. son valores verdaderos. 
  } else {
    console.log(v, "→ falsy"); // me va a devolver los valores 0, null, undefined, false, NaN. son los valores falsos. 
  }
});

// ------------------------------------------------------------
// KATA 3 — Contador de vocales
// Dada una palabra, contá cuántas vocales tiene.
// ------------------------------------------------------------

console.log("\n--- KATA 3: Contador de vocales ---");

let palabra = "javascript";
let vocales = "aeiou";
let contador = 0;

for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i])) {
    contador++;
  }
}

console.log(`La palabra "${palabra}" tiene ${contador} vocales.`);


// ------------------------------------------------------------
// KATA 4 — Temperatura
// Convertí grados Celsius a Fahrenheit: F = C * 9/5 + 32
// Imprimí si es frío (< 15°C), templado (15-25°C) o calor (> 25°C)
// ------------------------------------------------------------

console.log("\n--- KATA 4: Temperatura ---");

let celsius = 22;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log(`${celsius}°C equivale a ${fahrenheit}°F`); // me devuelve 22°C equivale a 71.6°F // Temperatura agradable. 

if (celsius < 15) {
  console.log("Hace frío 🥶");
} else if (celsius <= 25) {
  console.log("Temperatura agradable 😊");
} else {
  console.log("Hace calor 🥵");
}

// ------------------------------------------------------------
// KATA 5 — Número par o impar con while
// Imprimí todos los números pares del 1 al 20 usando while.
// ------------------------------------------------------------

console.log("\n--- KATA 5: Pares con while ---");

let num = 1;
while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num, "es par");
  }
  num++;
}
