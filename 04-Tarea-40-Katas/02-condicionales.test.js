const {
  signoNumero,
  esBisiesto,
  tipoDia,
  precioEntrada,
  tieneContenido,
  puedeConducir,
  numeroDia,
  clasificarIMC,
  valorPorDefecto,
  calificarNota,
} = require("./02-condicionales");

describe("Katas 02: Condicionales", () => {
  test("Kata 11 — signoNumero() debe identificar positivo, negativo o cero", () => {
    expect(signoNumero(15)).toBe("positivo");
    expect(signoNumero(-3)).toBe("negativo");
    expect(signoNumero(0)).toBe("cero");
  });

  test("Kata 12 — esBisiesto() debe identificar años bisiestos correctamente", () => {
    expect(esBisiesto(2000)).toBe(true); // divisible por 400
    expect(esBisiesto(1900)).toBe(false); // divisible por 100 pero no por 400
    expect(esBisiesto(2024)).toBe(true); // divisible por 4
    expect(esBisiesto(2023)).toBe(false); // no divisible por 4
  });

  test("Kata 13 — tipoDia() debe clasificar el día como laborable o fin de semana", () => {
    expect(tipoDia("lunes")).toBe("laborable");
    expect(tipoDia("viernes")).toBe("laborable");
    expect(tipoDia("sábado")).toBe("fin de semana");
    expect(tipoDia("domingo")).toBe("fin de semana");
  });

  test("Kata 14 — precioEntrada() debe retornar el precio correcto según la edad", () => {
    expect(precioEntrada(8)).toBe(500);
    expect(precioEntrada(11)).toBe(500);
    expect(precioEntrada(12)).toBe(1200);
    expect(precioEntrada(30)).toBe(1200);
    expect(precioEntrada(64)).toBe(1200);
    expect(precioEntrada(65)).toBe(700);
  });

  test("Kata 15 — tieneContenido() debe verificar si el string tiene contenido", () => {
    expect(tieneContenido("JavaScript")).toBe("Tiene contenido");
    expect(tieneContenido("")).toBe("Vacío");
  });

  test("Kata 16 — puedeConducir() debe verificar las condiciones para conducir", () => {
    expect(puedeConducir(20, true)).toBe("Puede sacar el registro");
    expect(puedeConducir(17, true)).toBe("Menor de edad");
    expect(puedeConducir(20, false)).toBe("Sin teórico aprobado");
  });

  test("Kata 17 — numeroDia() debe retornar el nombre del día correcto", () => {
    expect(numeroDia(1)).toBe("lunes");
    expect(numeroDia(3)).toBe("miércoles");
    expect(numeroDia(7)).toBe("domingo");
    expect(numeroDia(0)).toBe("Día inválido");
    expect(numeroDia(8)).toBe("Día inválido");
  });

  test("Kata 18 — clasificarIMC() debe clasificar correctamente", () => {
    expect(clasificarIMC(50, 1.75)).toBe("Bajo peso"); // IMC ≈ 16.3
    expect(clasificarIMC(70, 1.75)).toBe("Normal"); // IMC ≈ 22.9
    expect(clasificarIMC(85, 1.75)).toBe("Sobrepeso"); // IMC ≈ 27.8
    expect(clasificarIMC(100, 1.75)).toBe("Obesidad"); // IMC ≈ 32.7
  });

  test('Kata 19 — valorPorDefecto() debe retornar "Anónimo" cuando no hay nombre', () => {
    expect(valorPorDefecto(null)).toBe("Anónimo");
    expect(valorPorDefecto("")).toBe("Anónimo");
    expect(valorPorDefecto("María")).toBe("María");
  });

  test("Kata 20 — calificarNota() debe retornar la calificación correcta", () => {
    expect(calificarNota(95)).toBe("Sobresaliente");
    expect(calificarNota(82)).toBe("Notable");
    expect(calificarNota(65)).toBe("Aprobado");
    expect(calificarNota(45)).toBe("Reprobado");
    expect(calificarNota(0)).toBe("Reprobado");
    expect(calificarNota(100)).toBe("Sobresaliente");
  });
});
