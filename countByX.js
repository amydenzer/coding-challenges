// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

/*** My Solution***/  

function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}

/*** Example Usage ***/  
console.log(countBy(5, 3));  // Outputs: [5, 10, 15]

/*** Other Solutions ***/  
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}


const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)



const countBy = (x, n) =>
  [...Array(n)].map((_, idx) => ++idx * x);



const countBy = (x, n) => Array.from({length: n}, (_, k) => (k + 1) * x);



function countBy(x, n) {
    for (var a = [], i = 0; i < n; i++) {
      a.push(x * (1 + i))
    }
  
    return a
  }


  function countBy(x, n) {
    return Array(n).fill(x).map( (el, ind) => el * (ind + 1) );
  }



  /***  Test Cases ***/

  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;
  
  describe("Basic Tests",function(){
    it("Testing for fixed tests", () => {
      assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
      assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
      assert.deepEqual(countBy(3,7), [3,6,9,12,15,18,21], "Array does not match")
      assert.deepEqual(countBy(50,5), [50,100,150,200,250], "Array does not match")
      assert.deepEqual(countBy(100,6), [100,200,300,400,500,600], "Array does not match")
    })
  
    it("Random Tests",() => {
    
      function randint(a,b){return Math.floor(Math.random()*(b-a)+a);}
  
      function countSol(x, n) {
          let z = [];
          for (let i = 1; i <= n; i++) {
              z.push(x * i);
          }
          return z;
      }
   
      for (let k=0;k<20;k++){
        let x=randint(1, 100);
        let n=randint(1, 20);
        assert.deepEqual(countBy(x, n), countSol(x,n),`Testing for result with count_by(${x},${n})`)
      }
    })
  })

  