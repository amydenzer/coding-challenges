// DESCRIPTION:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// first attempt

const areaOrPerimeter = function(l , w) {
  
    if (l === w) {
      return l * w;
    } else if (l !== w) {
      return ((l * 2) + (w * 2));
    }
  }


  // alternative solution - best practice
  
  const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };

  const areaOrPerimeter = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
  };

  // another solution
  
  const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);

  //final solution with function call in comments below
  
  const areaOrPerimeter = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
  };
  
  // const areaOrPerimeter = (l, w) => l === w ? l * w : (l + w) * 2;



  //suggested test case

  const { assert } = require('chai');

describe("Tests", () => {
  
  function doTest(l, w, expected) {
    assert.strictEqual(areaOrPerimeter(l, w),  expected, `Incorrect answer for l=${l}, w=${w}`);
  }
  
  it("Example tests", () => {
    doTest(3,  3,  9);
    doTest(6, 10, 32);
  });
  
  it("Random tests" , function() {
    
    let tests = [];
    
    for(let i = 1; i < 50; i++) {
      let a = (Math.random() * 1200) + 10 | 0;
      let b = (Math.random() * 1500) + 10 | 0;
      b += (a == b);

      tests.push([a , b, 2*a+2*b]);
      tests.push([a , a, a*a]);
    }
    
    tests = tests.map(e=>[e, Math.random()]).sort((e1,e2)=>e1[1]-e2[1]).map(e=>e[0]);
    
    for(let [l,w,expected] of tests) {
      doTest(l,w,expected);
    }
  });
});