// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//My solution


// Split the input string by spaces to get an array of numbers (as strings).
// Convert the array of string numbers to actual numbers.
// Use the Math.max and Math.min functions to find the highest and lowest numbers.
// Return the numbers as a string in the specified format.

function highAndLow(numbers){
    let numArray = numbers.split(' ').map(Number); // Convert to array of numbers
    let maxNum = Math.max(...numArray);  // Find the maximum number
    let minNum = Math.min(...numArray);  // Find the minimum number
    
    return `${maxNum} ${minNum}`;
}


//others
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

  //others
  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

  //test case
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing basic input", () => {
    assert.strictEqual(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
  });
  it("Testing common string sort mistake", () => {
    assert.strictEqual(highAndLow("10 2 -1 -20"), "10 -20", "Sorting a collection of strings is different from softing a collection of numbers");
  });
  it("Testing positive and negative", () => {
    assert.strictEqual(highAndLow("1 -1"), "1 -1");
  });
  it("Testing positive and positive", () => {
    assert.strictEqual(highAndLow("1 1"), "1 1");
  });
  it("Testing negative and negative", () => {
    assert.strictEqual(highAndLow("-1 -1"), "-1 -1");
  });
  it("Testing positive, negative and zero", () => {
    assert.strictEqual(highAndLow("1 -1 0"), "1 -1");
  });
  it("Testing positive, positive and zero", () => {
    assert.strictEqual(highAndLow("1 1 0"), "1 0");
  });
  it("Testing negative, negative and zero", () => {
    assert.strictEqual(highAndLow("-1 -1 0"), "0 -1");
  });
  it("Testing single", () => {
    assert.strictEqual(highAndLow("42"), "42 42");
  });
});

describe("Random tests", function(){
  let t = 100, rnd = Math.random;
  
  it("Testing for 100 random tests", () => {
    while(t--){
      let min = ~~(rnd()*1e4)-5e3, max = min+3e3+~~(rnd()*100), rr = [], exp = max+" "+min;
      for( let i=1; i< 20; i++ ) rr.push(min+~~(rnd()*3e3));

      rr = rr.slice(10).concat([min,max]).concat(rr.slice(0,10));
      rr = rr.sort(function(){return rnd()<.5 ? 1:-1 }).join(" ");

      assert.strictEqual(highAndLow(rr),exp, `Testing for str = ${JSON.stringify(rr)}`)
    }
  })
});