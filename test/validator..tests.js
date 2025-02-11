const { string, number, boolean, object } = require("../src");

test("string validation", () => {
  expect(string().parse("hello")).toBe("hello");
  expect(() => string().parse(123)).toThrow("Expected a string");
});

test("number validation", () => {
  expect(number().parse(42)).toBe(42);
  expect(() => number().parse("not a number")).toThrow("Expected a number");
});

test("boolean validation", () => {
  expect(boolean().parse(true)).toBe(true);
  expect(() => boolean().parse("false")).toThrow("Expected a boolean");
});

test("object validation", () => {
  const schema = object({
    name: string(),
    age: number(),
  });

  expect(schema.parse({ name: "Alice", age: 25 })).toEqual({ name: "Alice", age: 25 });
  expect(() => schema.parse({ name: "Alice", age: "not a number" })).toThrow(
    'Expected a number'
  );
});
