// added a special case to her function, but she made a mistake.

// Can you help her?

// Solution

function greet(name){
    let result = "Hello, " + name + "!";
    if(name === "Johnny") {
      return "Hello, my love!";
      } else {
        return result
      }
  }

// Test case
const Test = require('@codewars/test-compat');

describe("Jenny's greeting function", function(){
  it("should greet some people normally",function(){
    Test.assertEquals(greet("Jim"), "Hello, Jim!");
    Test.assertEquals(greet("Jane"), "Hello, Jane!");
    Test.assertEquals(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special",function(){
    Test.assertEquals(greet("Johnny"), "Hello, my love!");
  });
});  