// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//My Solution
function litres(time) {
    const litres = .5 
    return Math.floor(litres * time)
  }
  
  //rule .5 liters/hr 
  //time * .5 liters
  //Math.floor()

  //Test
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;
  
  describe('Fixed tests', () => {
    it('Tests', () => {
      assert.strictEqual(litres(2), 1, 'should return 1 litre');
      assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
      assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
      assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
      assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
      assert.strictEqual(litres(1787), 893, 'should return 893 litres');
      assert.strictEqual(litres(0), 0, 'should return 0 litres');
    });
  });
  
  describe('Random tests', () => {  
    const ans = t => Math.floor(t * 0.5);
    
    it('Testing for 40 random tests', () => {
      for(let i = 0; i < 40; i++) {
        let time = Math.floor(Math.random() * 10000);
        assert.strictEqual(litres(time), ans(time), `should return ${time} litre${time === 1 ? '' : 's'}`);
      }
    });
  });
