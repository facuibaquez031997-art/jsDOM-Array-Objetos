# 🧠 Guión de Clase — Variables, Tipos y Control de Flujo

## 🎯 Objetivos de la clase

Al finalizar, el alumno podrá:

- Declarar variables usando `var`, `let` y `const` y explicar sus diferencias.
- Comprender cómo JavaScript lee el código (Memoria, Garbage Collection y Hoisting).
- Identificar los tipos de datos primitivos de JavaScript (y sus rarezas como `NaN`).
- Aplicar estructuras de control (`if/else`, `switch`, bucles).

---

## 1. Variables y Memoria

### ¿Qué es una variable?

Una variable es un espacio en memoria con un nombre, donde guardamos información. Imagina que la Memoria RAM de tu computadora es un galpón gigante. Crear una variable es agarrar una caja de cartón, escribirle un nombre con fibrón, y meter un dato adentro.

> **💡 El Conserje (Garbage Collection):** En JavaScript, cuando el navegador detecta que ya no estás usando una variable (una caja), pasa el "Garbage Collector" (el conserje) y limpia ese pedacito de RAM automáticamente para que tu PC no explote.

```js
let nombre = "Ana";
const PI = 3.14;
var edad = 25;
```

### `let` vs `const` vs `var`

|             | `let`  | `const` | `var`     |
| ----------- | ------ | ------- | --------- |
| Reasignable | ✅     | ❌      | ✅        |
| Scope       | bloque | bloque  | función   |
| ¿Usar hoy?  | ✅     | ✅      | ⚠️ evitar |

---

### 1.5 ¿Cómo lee tu código JavaScript? (El famoso "Hoisting")

JavaScript lee tu código de arriba hacia abajo, pero antes de ejecutarlo, hace una "lectura rápida" (pre-scan). En esta lectura, busca todas las declaraciones de variables y funciones y las "eleva" visualmente a la parte superior de la memoria. A este fenómeno se le llama **Hoisting** (Elevación).

#### El Peligro de `var` (Por qué ya no se usa)

Si intentas imprimir una variable `var` antes de crearla, JS no te frena ni te da error. Te devuelve `undefined`. ¡Esto causa bugs silenciosos!

```js
console.log(nombreFantasma); // Imprime: undefined (¡Debería dar error, pero no lo da!)
var nombreFantasma = "Casper";
```

#### La Seguridad de `let` y `const`

Con `let` y `const`, el navegador te pone una barrera de seguridad: te prohíbe usarlas antes de la línea exacta donde las declaraste.

```js
console.log(nombreSeguro); // 🚨 ERROR ROJO: Cannot access 'nombreSeguro' before initialization
let nombreSeguro = "Iron Man";
```

> **💡 Regla de Oro Senior:** ¡Amen los errores rojos! `let` y `const` nos tiran un error en la cara para protegernos.

#### Funciones Mágicas (Hoisting útil)

El hoisting es la razón por la que puedes ejecutar una función tradicional antes de escribir su código:

```js
hacerMagia(); // Se ejecuta perfectamente e imprime: "¡Abracadabra!"

function hacerMagia() {
  console.log("¡Abracadabra!");
}
```

---

## 2. Tipos de Datos Primitivos

```js
// String (Texto)
let saludo = "Hola mundo";

// Number (Números para matemáticas)
let precio = 99.99;
let cantidad = 5;

// Boolean (Interruptor ON/OFF)
let esMayorDeEdad = true;
let estaLogueado = false;

// Null (Ausencia intencional de valor - Vaciaste la caja a propósito)
let resultado = null;

// Undefined (Variable declarada pero sin valor - Te olvidaste de meter algo)
let sinAsignar;
console.log(sinAsignar); // undefined

// NaN (Not a Number - Error matemático famoso)
let calculoRaro = "Manzana" / 2;
console.log(calculoRaro); // NaN (¡Te avisa que intentaste hacer mates con texto!)
```

### `typeof` — Detectar el tipo

```js
console.log(typeof "texto"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" ← bug histórico de JS
```

### 🎬 Tráiler: Tipos Complejos (Próxima Clase)

Todo lo anterior guarda un solo valor. La próxima semana veremos cajas gigantes capaces de guardar múltiples datos:

```js
let lista = ["Manzanas", "Leche"]; // Array (Lista)
let jugador = { nombre: "Mario", vidas: 3 }; // Object (Objeto)
```

---

## 3. Truthy y Falsy

En JavaScript, todo valor es "verdadero" o "falso" en contexto booleano. El lenguaje tiene un "detector de mentiras" interno.

**Falsy** (Tienen cara de falso y se comportan como `false`. ¡Son solo estos 6!):

```js
(false, 0, "", null, undefined, NaN);
```

**Truthy** (Todo lo demás en el universo JS):

```js
(true, 1, "hola", [], {}, "0");
```

---

## 4. Operadores

### Comparación

```js
// Igualdad estricta (El Patovica Estricto - Recomendada SIEMPRE)
5 === 5; // true
5 === "5"; // false  ← Compara Valor Y Tipo de dato.

// Igualdad débil (El Patovica Relajado - EVITAR)
5 == "5"; // true   ← Hace coerción de tipo ("Parece un 5, pasá").
```

### Lógicos

```js
true && false; // false  (AND — ambos deben ser verdaderos)
true || false; // true   (OR — basta uno verdadero)
!true; // false  (NOT - Invierte el valor)
```

---

## 5. Control de Flujo

### `if / else if / else`

```js
let nota = 75;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

### `switch`

```js
let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("¡Por fin viernes!");
    break;
  default:
    console.log("Día normal");
}
```

---

## 6. Bucles

### `while` (La rueda del hámster)

```js
let contador = 0;

while (contador < 5) {
  console.log("Vuelta:", contador);
  contador++; // ¡CRUCIAL! Si olvidas esto, creas un bucle infinito y rompes el navegador.
}
```

### `for` (Cuando sabes exactamente cuántas vueltas dar)

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}
```

---

## 🙋‍♂️ Preguntas para cerrar la clase

1. ¿Cuál es la diferencia entre `let` y `const`?
2. ¿Qué es el Hoisting y por qué hace que usar `var` sea peligroso?
3. ¿Qué es un valor `falsy`? Dame 3 ejemplos.
4. ¿Por qué preferimos el triple igual `===` sobre el doble igual `==`?
5. ¿Qué pasa si olvidamos el `break` en un `switch` o el `contador++` en un `while`?
