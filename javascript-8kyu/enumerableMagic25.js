// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// Solution
function take(arr, n) {
    return arr.slice(0, n);
  }
// Solution
let take = (arr, n) => arr.slice(0, n);

// Solution
function take(arr, n) {
    if (n > arr.length) {
      return arr.slice();
    }
    return arr.slice(0, n);
  }

// Test
const Test = require('@codewars/test-compat');

describe("Sample Tests", function(){
  it("should work for sample tests", function(){
    Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
  });
});
