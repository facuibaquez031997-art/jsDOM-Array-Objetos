const {
  numerosHastaN,
  cuentaRegresiva,
  tablaMultiplicar,
  factorial,
  sinMultiplosDe4,
  primerMultiploDe13MayorA100,
  triangulo,
  sumaHastaN,
  fibonacci,
  esPrimo,
} = require("./03-bucles-basicos");

describe("Katas 03: Bucles Básicos", () => {
  test("Kata 21 — numerosHastaN() debe retornar un array del 1 al N", () => {
    expect(numerosHastaN(5)).toEqual([1, 2, 3, 4, 5]);
    expect(numerosHastaN(1)).toEqual([1]);
    expect(numerosHastaN(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("Kata 22 — cuentaRegresiva() debe retornar array con cuenta regresiva y despegue", () => {
    expect(cuentaRegresiva(3)).toEqual([3, 2, 1, 0, "¡Despegue! 🚀"]);
    expect(cuentaRegresiva(0)).toEqual([0, "¡Despegue! 🚀"]);
  });

  test("Kata 23 — tablaMultiplicar() debe retornar la tabla en el formato correcto", () => {
    const tabla7 = tablaMultiplicar(7);
    expect(tabla7).toHaveLength(10);
    expect(tabla7[0]).toBe("7 x 1 = 7");
    expect(tabla7[9]).toBe("7 x 10 = 70");
    expect(tablaMultiplicar(5)[4]).toBe("5 x 5 = 25");
  });

  test("Kata 24 — factorial() debe calcular el factorial correctamente", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  test("Kata 25 — sinMultiplosDe4() debe excluir los múltiplos de 4", () => {
    expect(sinMultiplosDe4(8)).toEqual([1, 2, 3, 5, 6, 7]);
    expect(sinMultiplosDe4(5)).toEqual([1, 2, 3, 5]);
    expect(sinMultiplosDe4(4)).toEqual([1, 2, 3]);
  });

  test("Kata 26 — primerMultiploDe13MayorA100() debe retornar 104", () => {
    expect(primerMultiploDe13MayorA100()).toBe(104);
  });

  test("Kata 27 — triangulo() debe retornar el triángulo de asteriscos correcto", () => {
    expect(triangulo(3)).toEqual(["*", "**", "***"]);
    expect(triangulo(1)).toEqual(["*"]);
    expect(triangulo(5)).toEqual(["*", "**", "***", "****", "*****"]);
  });

  test("Kata 28 — sumaHastaN() debe sumar todos los números del 1 al N", () => {
    expect(sumaHastaN(100)).toBe(5050);
    expect(sumaHastaN(10)).toBe(55);
    expect(sumaHastaN(1)).toBe(1);
  });

  test("Kata 29 — fibonacci() debe retornar los primeros N números de Fibonacci", () => {
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(1)).toEqual([0]);
  });

  test("Kata 30 — esPrimo() debe identificar números primos correctamente", () => {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(17)).toBe(true);
    expect(esPrimo(2)).toBe(true);
    expect(esPrimo(12)).toBe(false);
    expect(esPrimo(25)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });
});
