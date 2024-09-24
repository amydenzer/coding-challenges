// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


// Solution
function well(x){
    let goodCount = x.filter(x => x === 'good').length;
  
    if (goodCount > 2) {
        return 'I smell a series!';
    } else if (goodCount >= 1) {
        return 'Publish!';
    } else {
        return 'Fail!';
    }
}

// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
  });
});
