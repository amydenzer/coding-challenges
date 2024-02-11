// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


//mine
function descendingOrder(n){
    var result = n.toString().split('');
    
    // Sort the array in descending order
    result.sort(function(a, b) { return b - a; });
    
    // Join back into a string and use multiplication by 1 to convert to number
    return result.join('') * 1;
}

//array of positive whole numbers
//sort this array into the highest possible number
//123 => 321
//12347254 =>75443221
//41245 => 54421


//best practice

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  })

describe("Random tests", () => {  
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let num = randint(0, 10**randint(1, 10))
    let expected = +[...""+num].sort().reverse().join``
    it(`descendingOrder(${num}) should equal ${expected}`, () => {
      assert.strictEqual(descendingOrder(num), expected);
    });
  }
})