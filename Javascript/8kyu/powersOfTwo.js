

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//Solution

function powersOfTwo(n){
    var myArray = [];
    for (var i=0; i<=n; i++){
      myArray.push(2**i);
    }
    return myArray
  }


//Test Cases
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});

describe("Random Tests", function(){
  
  const solution = n => [...Array(n+1)].map((x,y) => Math.pow(2, y))
  let shuffle = require('lodash').shuffle([...Array(201)].map((x, y)=> y));
  
  it("Testing for 201 random tests", () => {
    for (let n in shuffle){
      assert.deepEqual(powersOfTwo(shuffle[n]), solution(shuffle[n]), `Testing for n = ${n}`)
    }
  })
})