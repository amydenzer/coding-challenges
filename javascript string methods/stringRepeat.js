// DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//my solution

function repeatStr (n, s) {
    return s.repeat(n);
  }


  //other solutions

  repeatStr = (n, s) => s.repeat(n)

  function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }


const repeatStr = (n,s) => s.repeat(n) ;



function repeatStr(n, str)
{
  return str.repeat(n);
}

function repeatStr (n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
  }


function repeatStr (n, s) {
    String.prototype.repeat = function(n) {
       return (new Array(n + 1)).join(this);
    };
    return s.repeat(n);
  }

  function repeatStr (n, s) {
    var i = n;
    var text = "";
    while (i > 0) {
       text += s;
       i--;
    }
    return text;
  }


//Test
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const Test = require('@codewars/test-compat');

const solution = (n, s) => Array.from({ length: n + 1 }).join(s);

describe("Tests", function() {
  it ("Basic tests", function() {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    assert.strictEqual(repeatStr(5, ">"), ">>>>>");
    assert.strictEqual(repeatStr(10, "!"), "!!!!!!!!!!");
    assert.strictEqual(repeatStr(3, "hello "), "hello hello hello ");
    assert.strictEqual(repeatStr(3, "$"), "$$$");
    assert.strictEqual(repeatStr(5, "a"), "aaaaa");
    assert.strictEqual(repeatStr(6, "A"), "AAAAAA");
    assert.strictEqual(repeatStr(7, "aA"), "aAaAaAaAaAaAaA");
  });
  it ("Random tests", function() {
    for(let i = 0; i < 10; i++) {
      let num = Test.randomNumber();
      let s = Test.randomToken()[0];
      assert.strictEqual(repeatStr(num, s), solution(num, s));
    }
  });
});