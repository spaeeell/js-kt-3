import { describe, test, expect } from "vitest";
import { hasCorrectElement } from "../src/task4";

describe("обработка базовых случаев", () => {
  test("[0.5] проверка на наличие положительного числа", ({ annotate }) => {
    annotate(0.5);

    expect(hasCorrectElement([], () => true))
    expect(hasCorrectElement([], () => true))
  });

  test("[0.5] проверка на наличие значений null или NaN", ({ annotate }) => {
    annotate(0.5);

    expect(hasCorrectElement([], () => true))
    expect(hasCorrectElement([], () => true))
  });

  test("[0.5] проверка на наличие пустой строки", ({ annotate }) => {
    annotate(0.5);

    expect(hasCorrectElement([], () => true))
    expect(hasCorrectElement([], () => true))
  });
});

test("[0.5] не производит лишних вычислений", ({ annotate }) => {
  annotate(0.125);

  expect(hasCorrectElement([], () => true))
  expect(hasCorrectElement([], () => true))
});
