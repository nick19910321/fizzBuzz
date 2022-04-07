import { test, expect } from "vitest";
import { fizzBuzz } from "./index";

test("should input 1 expect 1", () => {
  expect(fizzBuzz(1)).toEqual(1);
});

test("should input 3 expect fizz", () => {
  expect(fizzBuzz(3)).toEqual("fizz");
});
test("should input 5 expect Buzz", () => {
  expect(fizzBuzz(5)).toEqual("Buzz");
});
test("should input 15 expect fizzBuzz", () => {
  expect(fizzBuzz(15)).toEqual("fizzBuzz");
});
