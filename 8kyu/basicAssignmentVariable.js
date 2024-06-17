// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

// var a = "code";
// var b = "wa.rs";
// var name = a + b;


// My Solution
var a = "code";
var b = "wa.rs";
var name = a + b;


// Other Solution
const name = 'codewa.rs';

// Test
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(name, "codewa.rs");
    })
  })