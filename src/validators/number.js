class NumberSchema {
    parse(value) {
      if (typeof value !== "number") throw new Error("Expected a number");
      return value;
    }
  }
  
  const number = () => new NumberSchema();
  module.exports = { number };
  