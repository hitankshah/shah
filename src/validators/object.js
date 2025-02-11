class ObjectSchema {
    constructor(shape) {
      this.shape = shape;
    }
  
    parse(value) {
      if (typeof value !== "object" || value === null)
        throw new Error("Expected an object");
  
      const data = {};
      for (let key in this.shape) {
        data[key] = this.shape[key].parse(value[key]);
      }
      return data;
    }
  }
  
  const object = (shape) => new ObjectSchema(shape);
  module.exports = { object };
  