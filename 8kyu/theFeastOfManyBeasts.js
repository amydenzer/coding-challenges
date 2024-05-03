// DESCRIPTION:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// Solution
    // Check if the first letter of the beast's name matches the first letter of the dish
    let firstLetterMatch = beast[0] === dish[0];

    let lastLetterMatch = beast[beast.length - 1] === dish[dish.length - 1];

    return firstLetterMatch && lastLetterMatch;
// Tests
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)
Test.assertEquals(feast("marmot", "mulberry tart"), true)
Test.assertEquals(feast("porcupine", "pie"), true)
Test.assertEquals(feast("cat", "yogurt"), false)
Test.assertEquals(feast("electric eel", "lasagna"), false)
Test.assertEquals(feast("slow loris", "salsas"), true)
Test.assertEquals(feast("ox", "orange lox"), true)
Test.assertEquals(feast("blue-footed booby", "blueberry"), true)


//random tests
function makeString(min, max) {
    let array = [];
    let possible = "abcdefghijklmnopqrstuvwxyz";
    let length = Math.ceil((Math.random() * max) + min);
    if (max < min) return "Maximum argument should be greater than minimum!";
    for( let i=0; i < length; i++ ) {
        array.push(possible[(Math.floor(Math.random() * possible.length))]);
    }
    return array.join("");
}

function authorSolution(a, b) {
return a.charAt(0) === b.charAt(0) && a.charAt(a.length - 1) === b.charAt(b.length - 1)
}
for (let i = 0; i < 91; i++) {
 
  let a = makeString(2, 40);
  let b = makeString(2, 40);
  if (Math.random() < .5) {
    b = a[0] + b + a.slice(-1);
  }
  console.log('input a was:', a,', input b was:', b);
  Test.assertEquals(feast(a, b), authorSolution(a, b));
}

  });
});