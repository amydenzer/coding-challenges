// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// Solution
function shortcut(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
  
    for (let char of string) {
      if (!vowels.includes(char)) {
        result += char;
      }
    }

    return result;
  }
// Best Practice
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }
    
// Test
const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    doTest('hello', 'hll');
    doTest('how are you today?', 'hw r y tdy?');
    doTest('complain', 'cmpln');
    doTest('never', 'nvr');
  });    
});