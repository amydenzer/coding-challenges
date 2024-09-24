// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//Solution:
// const rps = (p1, p2) => {
//     if (p1 == p2)
//       return 'Draw!';
      
//      if (p1 == 'rock' && p2 == 'scissors') 
//        return 'Player 1 won!'
//      else if (p1 == 'scissors' && p2 == 'paper') 
//        return 'Player 1 won!'
//      else if (p1 == 'paper' && p2 == 'rock') 
//        return 'Player 1 won!'
//      else
//        return 'Player 2 won!';
//   };

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'; 
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!'; 
  }
};

// My Solution:
// const rps = (p1, p2) => {
//     if(p1 == p2) {
//       return 'Draw!'
//     } else if((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')) {
//       return 'Player 1 won!'
//     } else {
//       return 'Player 2 won!'
//     }
//   };

//Test
const Test = require('@codewars/test-compat');

describe('rock paper scissors', function() {
  const getMsg = (n) => `Player ${n} won!`;
  
  const solution = (p1, p2) => {
    const winMap = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock',
    };
    let v = winMap[p1] === p2 ? 1 : 2;
    return p1 === p2 ? 'Draw!' : `Player ${v} won!`;
  };

  it('player 1 win', function() {
    Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    Test.assertEquals(rps('paper', 'rock'), getMsg(1));
  });

  it('player 2 win', function() {
    Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    Test.assertEquals(rps('rock', 'paper'), getMsg(2));
  });

  it('draw', function() {
    Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    Test.assertEquals(rps('paper', 'paper'), 'Draw!');
  });
  
  it('random', function() {
    const options = ['rock', 'paper', 'scissors'];
    
    for (let i = 0; i < 50; ++i) {
      let rnd1 = options[~~(Math.random() * 3)];
      let rnd2 = options[~~(Math.random() * 3)];
      Test.assertEquals(rps(rnd1, rnd2), solution(rnd1, rnd2));
    }
  });
});