import { describe, test, expect, vi } from "vitest";
import { reverseArray } from "../src/task3";

const spy = vi.spyOn(console, 'log').mockImplementation((value) => value)

test("[1] выводит развернутый массив в консоль", ({ annotate }) => {
  annotate(1);

  const values = [1, 2, 3]
  reverseArray(values)

  expect(spy).toHaveBeenCalledOnce()
  expect(spy).toHaveBeenCalledWith([3, 2, 1])
});

test("[1] модифицирует массив на месте", ({ annotate }) => {
  annotate(1);

  const values = [1, 2, 3]
  reverseArray(values)

  console.log(values)
  expect(spy).toHaveBeenLastCalledWith([3, 2, 1])
});
