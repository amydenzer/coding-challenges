// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'



// Solution
function combineNames(first, last) {
    return `${first} ${last}`
}
// Solution
const combineNames = (...names) => names.join(' ');
// Solution
const combineNames = (a, b) => `${a} ${b}`;
// Test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(combineNames('James', 'Stevens'), 'James Stevens')
  });
});
