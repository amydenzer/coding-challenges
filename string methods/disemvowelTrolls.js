// DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//My Solution:

  const vowels = 'aeiou';

  function disemvowel(str) {
    return str
      .split('')
      .filter(letter => !vowels.includes(letter.toLowerCase()))
      .join('');
  }

//others
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }


//others
function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
  }


//Test case
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })
    
describe("Random tests", () => {  
  
  const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZaeiouAEIOU"
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let s = Array.from({length: randint(1, 10)}, (_, i) => Array.from({length: randint(1, 20)}, (_, i) => base[randint(0, base.length - 1)]).join``).join` `
    let expected = s.replace(/[aeiou]/gi, '');
    it(`Testing ${JSON.stringify(s)}`, () => {
      assert.strictEqual(disemvowel(s), expected);
    });
  }
})    