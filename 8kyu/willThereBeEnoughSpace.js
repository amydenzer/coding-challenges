// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Solution
function enough(cap, on, wait) {
    const availableSpace = cap - on
    if (wait <= availableSpace) {
      return 0
    } else {
      return wait - availableSpace
    }
  }
// Solution
function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }
// Solution
function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
  }

// Other
function enough(cap, on, wait) {
    if (on + wait < cap){
    return 0;
    } else {
    return (on + wait) - cap;
    }
  }  
// Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
