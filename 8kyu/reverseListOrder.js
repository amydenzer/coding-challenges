// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// Solution
function reverseList(list) {
    return list.reverse();
  }

// Test
const Test = require('@codewars/test-compat');

describe("reverseList", function(){
  it("should reverse some sample arrays", function(){
    Test.assertSimilar(reverseList([1,2,3,4]), [4,3,2,1]);
    Test.assertSimilar(reverseList([3,1,5,4]), [4,5,1,3]);
  });
  it("should reverse some more arrays", function() {
    Test.assertSimilar(reverseList([3,6,9,2]), [2,9,6,3]);
    Test.assertSimilar(reverseList([1]), [1]);
  });
  it("should reverse some random integer arrays", function() {
    for (let i = 0; i < 100; ++i) {
      const test = new Array(10).fill(0).map(_ => ~~(Math.random() * 100));
      Test.assertSimilar(reverseList(test.slice()), test.reverse());
    }
  });
});