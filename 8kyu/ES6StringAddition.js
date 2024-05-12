// DESCRIPTION:
// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

//My Solution

function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }

 //Other Solutions
 const joinStrings = (string1, string2) => `${string1} ${string2}`;

 //Another Solution
 joinStrings=(s1,s2)=>`${s1} ${s2}`;

 if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d*)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
  }
  function joinStrings(string1, string2){
     return "{0} {1}".format(string1, string2)
  }


  //Test Cases

  const { assert } = require('chai');
describe("add", () => {
  it("should work for fixed tests", () => {
     assert.strictEqual(joinStrings('string1', 'string2'), 'string1 string2');
     assert.strictEqual(joinStrings('testing', 'testing'), 'testing testing');
     assert.strictEqual(joinStrings(134, 234), '134 234');
     assert.strictEqual(joinStrings('a,', 'b'), 'a, b');
  });
  it("should work for random tests as well", () => {
   function joinStrings2(string1, string2){
   return `${string1} ${string2}`
  }
    for (let i = 0; i < 100; i++) {
      var randomNum = Math.floor(Math.random() * (Math.random() * 1000));
      var testOptions = ['string1', 'string2', 'string3', 'string4', 'string5', 'string6', 'string7', randomNum, randomNum, 'STRING11', '5tring']
      var string1 = testOptions[Math.floor(Math.random() * 11)];
      var string2 = testOptions[Math.floor(Math.random() * 11)];
      assert.strictEqual(joinStrings(string1, string2), joinStrings2(string1, string2));
    }
  });
 it("Testing that the '+' operator, String.concat and Array.join() are not used", () => {
   const fs = require('fs');
   const usercode = fs.readFileSync('/workspace/solution.txt', 'utf8');
   assert.isFalse(joinStrings.toString().includes('+'), "You cannot use the '+' operator");
   assert.isFalse(joinStrings.toString().includes('concat'), "You cannot use the String.concat() method ");
   assert.isFalse(/join\s*\(/.test(joinStrings.toString()), "You cannot use the Array.join() method ");
    
   assert.isFalse(usercode.includes('+'), "You cannot use the '+' operator, even outside of the joinString function!");
   assert.isFalse(usercode.includes('concat'), "You cannot use the String.concat() method, even outside of the joinString function!");
   assert.isFalse(/join\s*\(/.test(usercode), "You cannot use the Array.join() method, even outside of the joinString function!");
   assert.isFalse(usercode.includes('lodash'), "No cheating! You cannot use lodash!!");
 })
});