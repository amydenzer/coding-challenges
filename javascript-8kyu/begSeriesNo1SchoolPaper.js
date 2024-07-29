// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0


//My Solution
function paperwork(n, m){
    if (n < 0 || m < 0){
      return 0
    }else if( n === 0 || m === 0){
      return 0
    }else{
      return n * m
    }
  }


  //Other Solutions
  //Best Practice

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//Solutions
function paperwork(n, m) {
    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }

  function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}

const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);


function paperwork(n, m) {
    if((n>=0) && (m>=0)){
    return n*m;
    }
    else{
    return 0;
    }
   }

   const paperwork = (...n) =>  n.reduce((s,e) => s * Math.max(e,0), 1);


   function paperwork(n, m) {
    return +(n>0&&m>0)&&n*m
  }


  function paperwork(n, m) {
    return Math.max(0,n)*Math.max(0,m);
  }

  //Test Casees

  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Simple Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
    assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
    assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
    assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
    assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
  });
})

describe("Random Tests", function(){

  let paperwork2 = (n,m) => n*m>0 && n>0 ? n*m : 0;
  
  it("Testing for 100 random tests", () => {
    for (let i=0; i< 100; i++) {
      let a = ~~(Math.random()*201) - 100;
      let b = ~~(Math.random()*201) - 100;
      assert.strictEqual(paperwork(a,b), paperwork2(a,b), `Testing for n = ${a}, m = ${b}`);
    }
  });  
});