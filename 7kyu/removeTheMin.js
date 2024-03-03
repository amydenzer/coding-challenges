/* 
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

[1,2,3,4,5] => [2,3,4,5]
[5,3,2,1,4] => [5,3,2,4]
[2,2,1,2,1] => [2,2,2,1]
*/

//my attempt

function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestValue, 1);
    return copy
   }

//other solutions

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }


//another one 
  function removeSmallest(numbers) {
    let min = Infinity, index
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) min = numbers[index = i]
    }
  
    return numbers.slice(0, index).concat(numbers.slice(index + 1))
  }



//test
