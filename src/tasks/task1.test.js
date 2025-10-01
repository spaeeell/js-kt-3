import { test, expect } from "vitest";
import { processWord } from "./task1";

test("throws error on non-alpha words", () => {
    expect(() => processWord("abc123", "a")).toThrowError("Некорректная строка")
})

test("throws error if user cancels input", () => {
    expect(() => processWord(null, "a")).toThrowError("Некорректная строка")
    expect(() => processWord("Рай", null)).toThrowError("Некорректный символ")
})

test("works correctly on single occur of ignored character", () => {
    //
})

test("works correctly on multiple occur of ignored character", () => {
    //
})

test("works correctly on words without ignored character", () => {
    //
})
