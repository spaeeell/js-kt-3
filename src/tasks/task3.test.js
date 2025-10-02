import { describe, test, expect } from "vitest";
import { renderLadder } from "./task3";

describe("обработка некорректных данных", () => {
  test("выдается ошибка, если пользователь отменяет ввод", () => {
    expect(() => renderLadder(null)).toThrowError("Пользователь отменил ввод");
  });

  test("выдается ошибка, если пользователь ввёл не число", () => {
    expect(() => renderLadder("abc")).toThrowError(
      "Некорректные входные данные"
    );
  });

  test("выдается ошибка, если высота отрицательная", () => {
    expect(() => renderLadder("-7")).toThrowError(
      "Некорректные входные данные"
    );
  });

  test("выдается ошибка, если высота не целая", () => {
    expect(() => renderLadder("7.12")).toThrowError(
      "Некорректные входные данные"
    );
  });
});

test("выдает пустую строку при нулевой высоте", () => {
  expect(renderLadder("0")).toBe("");
});

test("работает на высоте 4", () => {
  const expectedResult = ["1", "12", "123", "1234"].join("\n");
  expect(renderLadder("4")).toBe(expectedResult);
});

test("работает на высоте 1", () => {
  expect(renderLadder("1")).toBe("1");
});
