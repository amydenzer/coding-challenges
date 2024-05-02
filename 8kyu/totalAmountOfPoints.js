// DESCRIPTION:
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Solution
function points(games) {
    let totalPoints = 0
        games.forEach(game => {
          const scores = game.split(':');
          const x = +scores[0];
          const y = +scores[1]
              if (x > y) {
                totalPoints +=3;
              } else if (x === y) {
                totalPoints +=1;
              }      
        });
    return totalPoints
  }
// Test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Total amount of points", function(){
  it("Fixed Tests", function(){
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
  });

  it("Random tests", function(){
    
    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function pointsSolution(games) {
       return games.reduce((a, b) => a + (b[0] > b[2] ? 3 : b[0] < b[2] ? 0 : 1), 0)
    }  
    
    let games = [];
    let g1, g2;
    for (let i = 0;  i < 50; i++) {
      games = []
      for (let j = 0; j < 10; j++) {
        g1 = randInt(0, 4);
        g2 = randInt(0, 4);
        games.push(g1.toString() + ":" + g2.toString());
      }
      let exp = pointsSolution(games.slice())
      assert.strictEqual(points(games), exp, `Testing for points = ${JSON.stringify(games)}`);
    }
  });
});