class BooleanSchema {
    parse(value) {
      if (typeof value !== "boolean") throw new Error("Expected a boolean");
      return value;
    }
  }
  
  const boolean = () => new BooleanSchema();
  module.exports = { boolean };
  