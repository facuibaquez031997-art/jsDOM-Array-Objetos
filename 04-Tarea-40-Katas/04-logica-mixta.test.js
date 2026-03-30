const {
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
} = require("./04-logica-mixta");

describe("Katas 04: Lógica Mixta", () => {
  test("Kata 31 — fizzBuzzExtendido() debe retornar el valor correcto", () => {
    expect(fizzBuzzExtendido(3)).toBe("Fizz");
    expect(fizzBuzzExtendido(5)).toBe("Buzz");
    expect(fizzBuzzExtendido(7)).toBe("Bazz");
    expect(fizzBuzzExtendido(15)).toBe("FizzBuzz"); // 3×5
    expect(fizzBuzzExtendido(21)).toBe("FizzBazz"); // 3×7
    expect(fizzBuzzExtendido(35)).toBe("BuzzBazz"); // 5×7
    expect(fizzBuzzExtendido(105)).toBe("FizzBuzzBazz"); // 3×5×7
    expect(fizzBuzzExtendido(2)).toBe("2");
    expect(fizzBuzzExtendido(11)).toBe("11");
  });

  test("Kata 32 — calcularTotal() debe aplicar el descuento cuando el total supera 5000", () => {
    // 1200+800+350+2100+900 = 5350 > 5000 → con 15% de descuento
    expect(calcularTotal([1200, 800, 350, 2100, 900])).toBe(4547.5);
    // 100+200 = 300 → sin descuento
    expect(calcularTotal([100, 200])).toBe(300);
    // 5000 exacto → sin descuento (solo si SUPERA)
    expect(calcularTotal([2500, 2500])).toBe(5000);
  });

  test("Kata 33 — contarParesEImpares() debe contar correctamente", () => {
    expect(contarParesEImpares(6)).toEqual({ pares: 3, impares: 3 });
    expect(contarParesEImpares(10)).toEqual({ pares: 5, impares: 5 });
    expect(contarParesEImpares(1)).toEqual({ pares: 0, impares: 1 });
  });

  test("Kata 34 — palabrasEnMayusculas() debe retornar cada palabra en mayúsculas", () => {
    expect(palabrasEnMayusculas("hola mundo")).toEqual(["HOLA", "MUNDO"]);
    expect(palabrasEnMayusculas("Aprender JavaScript es genial")).toEqual([
      "APRENDER",
      "JAVASCRIPT",
      "ES",
      "GENIAL",
    ]);
  });

  test("Kata 35 — clasificarNumero() debe retornar el objeto correcto", () => {
    expect(clasificarNumero(8)).toEqual({ esPar: true, mayorQueCinco: true });
    expect(clasificarNumero(3)).toEqual({ esPar: false, mayorQueCinco: false });
    expect(clasificarNumero(6)).toEqual({ esPar: true, mayorQueCinco: true });
    expect(clasificarNumero(7)).toEqual({ esPar: false, mayorQueCinco: true });
    expect(clasificarNumero(4)).toEqual({ esPar: true, mayorQueCinco: false });
  });

  test("Kata 36 — divisiblesPor3NoNueve() debe retornar los números correctos", () => {
    expect(divisiblesPor3NoNueve(20)).toEqual([3, 6, 12, 15]);
    expect(divisiblesPor3NoNueve(9)).toEqual([3, 6]);
    expect(divisiblesPor3NoNueve(3)).toEqual([3]);
  });

  test("Kata 37 — convertirTemperatura() debe convertir correctamente", () => {
    expect(convertirTemperatura(100)).toEqual({
      fahrenheit: 212,
      kelvin: 373.15,
    });
    expect(convertirTemperatura(0)).toEqual({ fahrenheit: 32, kelvin: 273.15 });
    expect(convertirTemperatura(37)).toEqual({
      fahrenheit: 98.6,
      kelvin: 310.15,
    });
  });

  test("Kata 38 — contarTiradas() debe contar las ocurrencias de cada cara del dado", () => {
    expect(contarTiradas([1, 2, 1, 3, 1, 6])).toEqual({
      1: 3,
      2: 1,
      3: 1,
      4: 0,
      5: 0,
      6: 1,
    });
    expect(contarTiradas([6, 6, 6])).toEqual({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 3,
    });
  });

  test("Kata 39 — obtenerDivisores() debe retornar todos los divisores en orden", () => {
    expect(obtenerDivisores(12)).toEqual([1, 2, 3, 4, 6, 12]);
    expect(obtenerDivisores(36)).toEqual([1, 2, 3, 4, 6, 9, 12, 18, 36]);
    expect(obtenerDivisores(7)).toEqual([1, 7]);
  });

  test("Kata 40 — adivinarNumero() debe retornar el resultado correcto por cada intento", () => {
    expect(adivinarNumero(10, [5, 15, 10])).toEqual([
      "Demasiado bajo",
      "Demasiado alto",
      "¡Correcto!",
    ]);
    expect(adivinarNumero(7, [7])).toEqual(["¡Correcto!"]);
    expect(adivinarNumero(5, [1, 2, 3, 4, 5])).toEqual([
      "Demasiado bajo",
      "Demasiado bajo",
      "Demasiado bajo",
      "Demasiado bajo",
      "¡Correcto!",
    ]);
  });
});
