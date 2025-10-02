import { test, expect } from "vitest";
import { getMultiplesOfThree } from "./task2";

test("если пользователь отменяет ввод, выдается ошибка", () => {
    expect(() => getMultiplesOfThree(null)).toThrowError("Пользователь отменил ввод")
})

test("если пользователь ввёл не число, выдается ошибка", () => {
    expect(() => getMultiplesOfThree("abc")).toThrowError("Некорректные входные данные")
})

test("работает на базовых случаях", () => {
    expect(getMultiplesOfThree("11")).toBe("3, 6, 9")
    expect(getMultiplesOfThree("14")).toBe("3, 6, 9, 12")
})

test("правая граница включена в вывод", () => {
    expect(getMultiplesOfThree("9")).toBe("3, 6, 9")
})

test("не добавляет лишние разделители", () => {
    expect(getMultiplesOfThree("4")).toBe("3")
})

test("выдает пустую строку, если кратных нет", () => {
    expect(getMultiplesOfThree("2")).toBe("")
})
