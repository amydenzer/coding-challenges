// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive


// Solution
function sorter(textbooks) {
    return textbooks.sort((a, b) => {
        const lowerA = a.toLowerCase();
        const lowerB = b.toLowerCase();
        if (lowerA < lowerB) {
            return -1;
        } else if (lowerA > lowerB) {
            return 1;
        } else {
            return 0;
        }
    });
}
// Solution
function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                    a.toLowerCase() < b.toLowerCase() ? -1  : 0)
  }
  
// Solution
function sorter(textbooks) {
    return [...textbooks].sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      return (a > b) - (a < b);
    });
  }

// Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample tests", () => {
  it("Basic", () => {                      
    assert.deepEqual(sorter(['Algebra', 'History', 'Geometry', 'English']),
                            ['Algebra', 'English', 'Geometry', 'History']);
  });
  it("Capitalization", () => { 
    assert.deepEqual(sorter(['Algebra', 'history', 'Geometry', 'english']),
                            ['Algebra', 'english', 'Geometry', 'history']);
  });
  it("Symbols", () => { 
    assert.deepEqual(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']),
                            ['$istory', '**english', 'Alg#bra', 'Geom^try']);
  });
});