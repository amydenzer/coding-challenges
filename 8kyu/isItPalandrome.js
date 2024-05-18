// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// Solutions
function isPalindrome(x) {
    x = x.toLowerCase();
    x = x.replace(/[^a-z0-9]/g, '');
    if (x.split('').reverse().join('') === x) {
        return true;
    } else {
        return false;
    }
}
// Solution
function isPalindrome(x, str = x.toLowerCase()) {
    return str === [...str].reverse().join('')
  } 
// Solution
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }

// Solution

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

// Test
const { assert } = require('chai');

describe("Fixed tests", function() {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});