// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page

//My solution
function removeUrlAnchor(url){
    return url.split('#')[0];
  }

//others
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }


//others
const removeUrlAnchor = url => url.replace(/#.+$/,'');

//others
const removeUrlAnchor = (url) => url.split("#")[0];


//test
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
  })

describe("Random tests", () => {  
  
    const protos = ["https://www.", "https://", "", "http://", "www.", "http://www."]
    const names  = ["spam", "egg", "bacon", "tea", "lobsterthermidor", "bakedbeans", "tomato", "toast", "sausage", "rat"]
    const toplds = [".com", ".org", ".edu", ".net", ".gov", ".int", ".mil"]
    const frags  = ["#fragment", "#tukada", "#fragman", "#thrafsma", "#porohita", "#fenduan", "#danpen", "#fragmentum",
              "#pasarte", "#shaziya", "#mieng", "#brochsteck", "", "", "", ""]
    
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let word = protos[randint(0, protos.length - 1)] + names[randint(0, names.length - 1)] + toplds[randint(0, toplds.length - 1)] + frags[randint(0, frags.length - 1)]
    let expected = word.replace(/#.*/, "")
    it(`removeUrlAnchor(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.strictEqual(removeUrlAnchor(word), expected);
    });
  }
})