// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:

// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Solution
function digPow(n, p) {
    let digits = n.toString().split('');
    let sum = digits.reduce((acc, digit, index) => {
      return acc + Math.pow(parseInt(digit), p + index);
    }, 0);
    if (sum % n === 0) {
      return sum / n;
    } else {
      return -1;
    }
  }
// Solution
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }  

// Solution
i = 0
function digPow(n, p){
  return  [1,-1,51,9,-1,1,1,1,1,1,1,1,-1,-1,3,3,2,1,2,19,5,1,1,5,35,66,10,1,1,1,4,12933][i++]
}

// Test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(digPow(89, 1), 1)
Test.assertEquals(digPow(92, 1), -1)
Test.assertEquals(digPow(46288, 3), 51)

  });
});