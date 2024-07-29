//This is a spin off my first kata
//You're given a string containing a sq of char sequences separated by commas. Write a function which returns a new string containing the same char sequences except the first and the last ones but this time separated by spaces.

//if the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value represented as a generic value NULL in the examples below.

//null is diff from an empty string or array. Think TP. When it's empty and there are no more squares of tissue paper left, there is an empty roll. It's empty not NULL. When you take away the roll, there is nothing there. 

//argument is a string with sets of chars separated by commons

//these chars sets can be of varying length
//should return a new string containing the same chars except the first and last ones. This is ambiguous that's why we need to look at some examples.
//return values should be separated by spaces instead of commas
//if the input is empty or output is empty then return null
//string input has a clear separator
//use split to take advantage of the delimiter and turn string into an array
//use slice to drop the first and last elements
//use join with " " as our delimiter
//if output is " " then return NULL instead - concepts of truthy and falsy

//My solution
function array(string) {
    return string.split(',').slice(1,-1).join(" ") || null
  }

//Tests
const {assert} = require('chai');

describe('Sample Tests', function() {
  function test(string, expected) {
    it(`string='${string}'`, function() {
      assert.strictEqual(array(string), expected);
    });
  }

  test('', null);
  test('1', null);
  test('A1,B2', null);
  test('1,2,3', '2');
  test('1,2,3,4', '2 3');
  test('A1,B2,C3,D4,E5', 'B2 C3 D4');
  test('A,1,23,456,78,9,Z', '1 23 456 78 9');
});  