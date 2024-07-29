// This kata is about static method that should return different values.

// On the first call it must be 1, on the second and others - it must be a double from previous value.

// Look tests for more examples, good luck :)

// Solution
class Class {
    static value = 1;
  
    static getNumber() {
      const currentValue = this.value;
      this.value *= 2;
      return currentValue;
    }
  }
// Another Solution
class Class {
    static number = 1
  
    static getNumber() {
      const currentVal = Class.number
      Class.number *= 2
      return currentVal
    }
  }
// Another Solution
class Class {
    static #last = -1;
    static getNumber() {
      return Math.pow(2, ++Class.#last);
    }
  
// Test
describe("Tests suite", function() {
    const { strictEqual } = require('chai').assert;
  
    it("sample tests", function() {
      strictEqual(Class.getNumber(),  1, "1st call should return 1");
      strictEqual(Class.getNumber(),  2, "2nd call should return 2");
      strictEqual(Class.getNumber(),  4, "3rd call should return 4");
      strictEqual(Class.getNumber(),  8, "4th call should return 8");
      strictEqual(Class.getNumber(), 16, "5th call should return 16");
    });
  });
