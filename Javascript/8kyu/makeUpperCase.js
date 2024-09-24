//Write a function which converts the input string to uppercase.

//My solution
function makeUpperCase(str) {
    return str.toUpperCase()
  }
  
//str
//numbers, lowercase, uppercase.
//letters123 => LETTERS123
//strING => STRING

//Test

const { assert } = require('chai');

describe("Extra Tests", function(){
  it("should pass the basic tests", function(){
    let tests = [
      ["",           ""],
      ["hello", "HELLO"],
      ["Hello", "HELLO"],
      ["HELLO", "HELLO"],
      ["hello world", "HELLO WORLD"],
      ["hello world !", "HELLO WORLD !"],
      ["heLlO wORLd !", "HELLO WORLD !"],
      ["1,2,3 hello world!", "1,2,3 HELLO WORLD!"]
    ];
    for(let [input, expected] of tests) {
      assert.strictEqual(makeUpperCase(input), expected, `Incorrect answer for input='${input}'`);
    }
  });
});

describe("Random Tests", function(){
  const letters = "abcdefgh ijklmnopq rstuvwxyz ABCDEFGHIJ QLMNOPQRSTUVWXYZ 1234567890!";
  it("Random tests", function() {
    for (let i = 0; i < 100; i++) {
      const word = Array.from({ length: Math.floor(Math.random() * 99) + 1 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
      const exp = word.toUpperCase();
        assert.strictEqual(makeUpperCase(word), exp, `Incorrect answer for input="${word}"`);
    }
  });
});
