// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// Solution

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }
// Solution
const createArray = n => Array(...Array(n)).map((v, i) => i + 1);

// Solution
function createArray(number){
    return Array.from({length:number},(v,i)=>i+1)
  }

// Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fix Timmys Counter", function() {
  it("Fixed Tests", function() {
    assert.deepEqual(createArray(1),[1]);
    assert.deepEqual(createArray(2),[1,2]);
    assert.deepEqual(createArray(3),[1,2,3]);
    assert.deepEqual(createArray(4),[1,2,3,4]);
    assert.deepEqual(createArray(5),[1,2,3,4,5]);
  });
});