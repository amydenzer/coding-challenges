// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//first attempt

function opposite(number) {
    return number * (-1);
}

//best practice
function opposite(number) {
    return(-number);
  }

//
function opposite(number) {
    /* Now this is the story all about how
        My life got flipped, turned upside down
        And I'd like to take a minute just sit right there
        I'll tell you how I became the prince of a town called Bel-air
        
        In west Philadelphia born and raised
        On the playground where I spent most of my days
        Chilling out, maxing, relaxing all cool
        And all shooting some b-ball outside of the school
        When a couple of guys, they were up to no good
        Started making trouble in my neighbourhood
        I got in one little fight and my mom got scared
        And said "You're moving with your auntie and uncle in Bel-air"
        
        I whistled for a cab and when it came near the
        License plate said "fresh" and had a dice in the mirror
        If anything I could say that this cab was rare
        But I thought nah, forget it, yo homes to Bel-air!
        
        I pulled up to a house about seven or eight
        And I yelled to the cabby "Yo, homes smell you later!"
        Looked at my kingdom I was finally there
        To sit on my throne as the prince of Bel-air */
    return -number;
  }

  //another solution
  const opposite = number => -number;

  //arrow function
  function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
  }

  //another best practice
  function opposite(n) {return -n}

  //omg. why, just why?? 
  function opposite(number) {
    if (number === 0) {
      return 0;
    } else if (number.toString().includes('.') && number > 0) {
      return parseFloat("-" + number, 10);
    } else if (number > 0) {
      return parseInt("-" + number, 10);
    } else if (number < 0 && number.toString().includes('.')) {
      var didget = number.toString().split('-').pop();
      return parseFloat(didget);
    } else {
      var didgets = number.toString().split('-').pop();
      return parseInt(didgets);
    }
  }

  //Test case
  const { assert } = require('chai');

describe('Fixed tests', () => {
  it('Is it a function?', () => {
    assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
  });
  it('should return -1', () => {
    assert.strictEqual(opposite(1), -1);
  });
  it('should return 0', () => {
    assert.strictEqual(opposite(0), 0);
  });
  it('should return -4.25', () => {
    assert.strictEqual(opposite(4.25), -4.25);
  });
  it('should return -3.3333333', () => {
    assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it('should return 12525220.3325', () => {
    assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it('should return 5', () => {
    assert.strictEqual(opposite(-5), 5);
  });
});

describe('Random tests', () => {
  const generateRandom = (min, max) => Math.random() * (max - min + 1) + min;
  const oppositeSol = (number) => -number;
  for (let i = 0; i < 40; i++) {
    const randomNumber = generateRandom(-100, 100);
    const expected = oppositeSol(randomNumber);
    it(`should return ${expected}`, () => {
      assert.strictEqual(opposite(randomNumber), expected);
    });
  }
});