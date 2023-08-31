// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size){
    let result = '';
    for (let i = 0; i < size; i++) {
      result += i % 2 === 0 ? '1' : '0';
    }
    return result;
  }

  console.log(stringy(6));

  //Other Solutions
  const stringy = x => ''.padStart(x,'10');


  const stringy = size => "10".repeat(size).slice(0,size);


  //Test Cases
  const Test = require('@codewars/test-compat');

describe("the stringy function", function() {

  it('Should return a string', function() {
    Test.assertEquals(typeof stringy(3), 'string',
    'Make sure it\'s a string not a number (the function is called stringy after all!)');
  });

  it('Should start with a 1', function() {
    Test.assertEquals(stringy(3)[0], '1',
    'Whoops your string doesnt start with a 1?');
  });  

  it('Should have the correct length', function() {  
    for(let i = 0; i < 10; ++i){
      let parameter = (Math.random() * 50 + 1) | 0;
      Test.assertEquals(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
    }
  });

  it('Should return the correct string', function() {
    let strings = []
    for (let i = 0; i < 20; i++) {
    	let parameter = (Math.random() * 50 + 1) | 0;
    	strings.push(stringy(parameter))
    }
    var map = strings.map(function(str) {
    		for (let i = 0; i < str.length; i++) {
    			if (i%2 === 0) {
    				if (str[i] !== '1') return false;
    			}
    			else {
    				if (str[i] !== '0') return false;
    			}
    		}
    		return true;
    });
    map.forEach(result => Test.expect(result, 'whoops try again'));
  });
});