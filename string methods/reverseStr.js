// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    //split reverse join
   return str.split('').reverse().join('') 
  }
  
  //'str'
  //return 'str' in reverse 'rts'
  // 'str' -> 'rst'
  
  
//Sample Test
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});  
  