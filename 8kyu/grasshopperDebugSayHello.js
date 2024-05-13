// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

// Solution
function sayHello(name) {
    return `Hello, ${name}`
  }

// Other

const sayHello = name => `Hello, ${name}`;
// Test
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
    assert.strictEqual(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
    assert.strictEqual(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
    assert.strictEqual(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
  });
});

