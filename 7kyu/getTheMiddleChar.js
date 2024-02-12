// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples: Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

//my attempt
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
  }
  
//   word => or
//   heart => a
//   substring method
//   round up
//   check for even or odd

//other solutions
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }

 //test

 const Test = require('@codewars/test-compat');

describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});

describe("50 Random tests",function() {
//----------------
function randint(a, b) { 
    //return Math.floor(Math.random() * (b - a + 1) + a); 
    return Math.floor(Math.random() * (b - a) + a); //b shouldn't be equal to 52
}
function GetMiddleT(s)
{
    let middle = Math.floor(s.length/2);
    if (s.length % 2 == 0)
        return s[middle-1] + s[middle];
    else
        return s[middle];
}
//----------------
    for (let i = 0; i < 50; i++) {
      let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let rando = randint(1,1000);
      let randStr = "";
      for (let j = 0; j<rando; j++)
      {
        let x = randint(0, alph.length);
        randStr += alph[x]; 
      }
      it("Random Testing", function() {
          Test.assertEquals(getMiddle(randStr), GetMiddleT(randStr));
      }
    )}
  })