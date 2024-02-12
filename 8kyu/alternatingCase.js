/* 
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
*/

//my solution

String.prototype.toAlternatingCase = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
      if (this.charAt(i) === this.charAt(i).toUpperCase())
        result += this.charAt(i).toLowerCase();
      else
        result += this.charAt(i).toUpperCase();
    }
    return result;
  }

//Test cases
const { assert } = require('chai');

describe("String.prototype.toAlternatingCase", () => {
  it("should work for fixed tests (provided in the description)", () => {
    assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
    assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
    assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
    assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    assert.strictEqual("12345".toAlternatingCase(), "12345");
    assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
  });
  it("should not modify the original string", () => {
    let string = "string";
    assert.strictEqual(string.toAlternatingCase(), "STRING");
    assert.strictEqual(string, "string");
    assert.notEqual(string, "STRING");
    for (let i = 0; i < 5; i++) {
      assert.strictEqual(string.toAlternatingCase(), "STRING"); // If original string is mutated when the method is called, calling the method on the same string repeatedly would return alternating results instead of the same results every time
    }
    string = "hElLo wOrLd";
    assert.strictEqual(string.toAlternatingCase(), "HeLlO WoRlD");
    assert.strictEqual(string, "hElLo wOrLd");
    assert.notEqual(string, "HeLlO WoRlD");
    for (let i = 0; i < 5; i++) {
      assert.strictEqual(string.toAlternatingCase(), "HeLlO WoRlD");
    }
  });
  it("should work for the title of this Kata", () => {
    let title = "altERnaTIng cAsE";
    title = title.toAlternatingCase();
    assert.strictEqual(title, "ALTerNAtiNG CaSe");
    title = title.toAlternatingCase();
    assert.strictEqual(title, "altERnaTIng cAsE");
    title = title.toAlternatingCase();
    assert.strictEqual(title, "ALTerNAtiNG CaSe");
    title = title.toAlternatingCase();
    assert.strictEqual(title, "altERnaTIng cAsE");
    title = "altERnaTIng cAsE <=> ALTerNAtiNG CaSe";
    title = title.toAlternatingCase();
    assert.strictEqual(title, "ALTerNAtiNG CaSe <=> altERnaTIng cAsE");
    title = title.toAlternatingCase();
    assert.strictEqual(title, "altERnaTIng cAsE <=> ALTerNAtiNG CaSe");
    title = title.toAlternatingCase();
    assert.strictEqual(title, "ALTerNAtiNG CaSe <=> altERnaTIng cAsE");
    title = title.toAlternatingCase();
    assert.strictEqual(title, "altERnaTIng cAsE <=> ALTerNAtiNG CaSe");
  });
  it("should finally work for random tests", () => {
    const solution = function(s) {
      return s.split("").map(c=>c==c.toLowerCase()?c.toUpperCase():c.toLowerCase()).join("");
    }
    
    const randint = require("lodash/random");
    const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789   "
    const randword = (s, n) => Array.from({length: n}, x => s[randint(0, s.length - 1)]).join("");
    
    for (let i = 0; i < 200; i++) {
      let randStr = randword(base, randint(1, 20));
      assert.strictEqual(randStr.toAlternatingCase(), solution(randStr));
    }
  });
});