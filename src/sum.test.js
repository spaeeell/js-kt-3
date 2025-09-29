import { test, expect } from "vitest";
import { getSum } from "./sum";

test("sum of correct positive values works well", () => {
    expect(getSum(2, 3)).toBe(5)
    expect(getSum(4, 7)).toBe(11)
    expect(getSum(3, 3)).toBe(6)
})

test("sum of incorrect values throws error", () => {
    expect(getSum(null, 3)).throws()
    expect(getSum(3, null)).throws()
    expect(getSum("ab", 7)).throws()
    expect(getSum(3, "ab")).throws()
})