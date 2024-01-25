// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // figure out current distance
    let distanceWeCanGet = mpg * fuelLeft
    // ternary
    return distanceWeCanGet >= distanceToPump ? true : false
  };

  //Best Practice
//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump/mpg <= fuelLeft
//   };


//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;


  //Test
  const assert = require("chai").assert;
  const sol = (distance, mpg, fuelLeft) => distance <= mpg * fuelLeft;
  
  describe("zeroFill", function() {
    it("Sample Tests", function() {
      assert.equal(zeroFuel(50, 25, 2), true);
      assert.equal(zeroFuel(100, 50, 1), false);
    });
    it("Basic Tests", function() {
      assert.equal(zeroFuel(60, 30, 3), true);
      assert.equal(zeroFuel(70, 25, 1), false);
      assert.equal(zeroFuel(100, 25, 3), false);
    });
    it("Random Tests", function() {
      for (let i = 0; i < 100; ++i) {
        let d = ~~(Math.random() * 90 + 10),
            m = ~~(Math.random() * 20 + 10),
            f = ~~(Math.random() * 5 + 1);
            
        assert.equal(zeroFuel(d, m, f), sol(d, m, f));
      }
    });
  });  
