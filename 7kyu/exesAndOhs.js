// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// Solution
function XO(str) {
    const lowerStr = str.toLowerCase();
    
    let xCount = 0;
    let oCount = 0;
    
    for (let char of lowerStr) {
      if (char === 'x') {
        xCount++;
      } else if (char === 'o') {
        oCount++;
      }
    }
    
    return xCount === oCount;
  }
// Solution
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }
// Solution
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

// Test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
  });
});


