import { test, expect } from "vitest";
import { getMultiplesOfThree } from "./task1";

test("throws error on user cancel", () => {
    expect(() => getMultiplesOfThree(null)).toThrowError("Пользователь отменил ввод")
})

test("throws error on incorrect user input", () => {
    //
})

test("correctly process basic cases", () => {
    //
})

test("correctly includes boundaries", () => {
    //
})