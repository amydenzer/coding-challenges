// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

//Solution
String.prototype.isUpperCase = function() {
    for (let i = 0; i < this.length; i++) {
      if (this[i] >= 'a' && this[i] <= 'z') {
        return false
      } 
    } 
    return true;
  }

  //other solutions
  String.prototype.isUpperCase=function() {
    return this==this.toUpperCase()
}

//other solutions
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }

  //Test
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Fixed Tests', () => {
  it("should work for the examples provided in the description", () => {
    assert.property("", "isUpperCase", 'Must define the prototype isUpperCase')
    assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
    assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
    assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
  });
  
  it("should also work for a few other basic tests", () => {
    assert.strictEqual('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
    assert.strictEqual('hello world'.isUpperCase(), false, 'hello world is not upper case');
    assert.strictEqual('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
    assert.strictEqual('hello World'.isUpperCase(), false, 'hello World is not upper case');
    assert.strictEqual('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
    assert.strictEqual('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
    assert.strictEqual('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
    assert.strictEqual('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
    assert.strictEqual('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
    assert.strictEqual('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
    assert.strictEqual('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
    assert.strictEqual('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
    assert.strictEqual('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
    assert.strictEqual('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
    assert.strictEqual('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
    assert.strictEqual('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
    assert.strictEqual('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
    assert.strictEqual('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
  });
});

describe('Random Tests', () => {
  it("Tests", () => {
    let tests = (function(){
      let tests = [];
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      const rand = (a,b) => Math.floor(Math.random() * (b - a + 1) + a);    
      const generateWord = _ => {
        let word = '';
        for(let c=0;c<rand(10,1);c++)
          word += chars[rand(chars.length,0)];
        if(rand(100,0) <= 25)
          word = word.toUpperCase()
        return word;
      }
      for(let i=0;i<1000;i++){
        let test = {};
        
        let word = generateWord();
        test.test = word;
        test.ans = word.toUpperCase() == word;
        
        tests.push(test);
      }
      return tests;
    })();
    for(let key in tests)
      assert.strictEqual(tests[key].test.isUpperCase(), tests[key].ans, `${tests[key].test} is${tests[key].ans?'':' not'} upper case`);
  });
});
