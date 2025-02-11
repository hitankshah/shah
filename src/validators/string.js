class StringSchema {
    parse(value) {
      if (typeof value !== "string") throw new Error("Expected a string");
      return value;
    }
  }
  
  const string = () => new StringSchema();
  module.exports = { string };
  