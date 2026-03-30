const {
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
} = require("./01-variables-y-tipos");

describe("Katas 01: Variables y Tipos de Datos", () => {
  test("Kata 1 — sumar() debe sumar dos números correctamente", () => {
    expect(sumar(2, 3)).toBe(5);
    expect(sumar(-5, 10)).toBe(5);
    expect(sumar(0, 0)).toBe(0);
    expect(sumar(1.5, 1.5)).toBe(3);
  });

  test("Kata 2 — restar() debe restar dos números correctamente", () => {
    expect(restar(10, 3)).toBe(7);
    expect(restar(5, 5)).toBe(0);
    expect(restar(3, 10)).toBe(-7);
  });

  test("Kata 3 — unirNombre() debe concatenar nombre y apellido con un espacio", () => {
    expect(unirNombre("Lionel", "Messi")).toBe("Lionel Messi");
    expect(unirNombre("Ana", "García")).toBe("Ana García");
    expect(unirNombre("Juan", "Pérez")).toBe("Juan Pérez");
  });

  test("Kata 4 — crearSaludo() debe retornar el string de saludo correcto", () => {
    expect(crearSaludo("Juan", 20)).toBe("Hola, soy Juan y tengo 20 años.");
    expect(crearSaludo("María", 15)).toBe("Hola, soy María y tengo 15 años.");
  });

  test("Kata 5 — detectarTipo() debe devolver el tipo de dato correcto", () => {
    expect(detectarTipo("Hola")).toBe("string");
    expect(detectarTipo(42)).toBe("number");
    expect(detectarTipo(true)).toBe("boolean");
    expect(detectarTipo(undefined)).toBe("undefined");
  });

  test("Kata 6 — convertirANumero() debe convertir un string a número", () => {
    expect(convertirANumero("123")).toBe(123);
    expect(convertirANumero("0")).toBe(0);
    expect(typeof convertirANumero("5")).toBe("number");
  });

  test("Kata 7 — calcularLongitud() debe retornar la longitud del string", () => {
    expect(calcularLongitud("Hola")).toBe(4);
    expect(calcularLongitud("")).toBe(0);
    expect(calcularLongitud("  Hola Mundo  ")).toBe(14);
  });

  test("Kata 8 — aMayusculas() debe convertir el string a mayúsculas", () => {
    expect(aMayusculas("hola")).toBe("HOLA");
    expect(aMayusculas("JavaScript")).toBe("JAVASCRIPT");
    expect(aMayusculas("")).toBe("");
  });

  test("Kata 9 — calcularAreaCirculo() debe calcular el área correctamente", () => {
    expect(calcularAreaCirculo(1)).toBe(3.14);
    expect(calcularAreaCirculo(7)).toBe(153.94);
    expect(calcularAreaCirculo(0)).toBe(0);
  });

  test("Kata 10 — verificarNaN() debe detectar si un valor es NaN", () => {
    expect(verificarNaN(NaN)).toBe(true);
    expect(verificarNaN("hola")).toBe(true);
    expect(verificarNaN(42)).toBe(false);
    expect(verificarNaN("123")).toBe(false);
  });
});
