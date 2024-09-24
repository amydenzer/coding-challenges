/*Description
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
//Solution
function positiveSum(arr) {
    let positiveNumbersSum = arr.filter(num => num > 0).reduce((acc, currentValue) => acc + currentValue, 0);
    return positiveNumbersSum
  }

  //Best Practices
  function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

  //Variation
  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

 //Test Cases
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });

describe("Random tests", () => {  
  
  function sol(arr){
    return arr.reduce((x, y) => x + (y > 0 ? y : 0), 0)
  }
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let arr = Array.from({length: randint(5, 120)}, (_, i) => randint(-100, 100))
    let expected = sol(arr.slice())
    it(`positiveSum(${JSON.stringify(arr)}) should equal ${expected}`, () => {
      assert.strictEqual(positiveSum(arr), expected);
    });
  }
})
