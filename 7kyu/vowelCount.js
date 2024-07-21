// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// list of vowels - string
// lower case and or spaces
// returns are number/count of vowels

// Brute force


function getCount(str) {
    const vowels = 'aeiou'
    let count = 0

    for (let char of str) {
        if (vowels.includes(char)){
            count ++
        }
    }
    return count
}
// Another solution
// Turn str into an array
// Filter vowels
// get length

function getCount(str) {
return Array.from(str).filter((char) => 'aeiou'.includes(char)).length
}

// Test
const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});