/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5 , we get 3,5,6,9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function isAMultipleOf3(number) {
  return number % 3 == 0;
}

function isAMultipleOf5(number) {
  return number % 5 == 0;
}

function bruteForceSolution(number) {
  let sum = 0;
  for (i = 1; i < number; i++) {
    if (isAMultipleOf3(i) || isAMultipleOf5(i)) {
      sum = sum + i;
    }
  }
  return sum;
}

function solution1(number) {
  let sum = 0;
  let possibleNoMultiplesof3 = Math.floor(number / 3);
  for (i = 1; i <= possibleNoMultiplesof3; i++) {
    if (3 * i !== number && (3 * i) % 5 !== 0) {
      sum = sum + 3 * i;
    }
  }

  let possibleNoMultiplesof5 = Math.floor(number / 5);
  for (i = 1; i <= possibleNoMultiplesof5; i++) {
    if (5 * i !== number) {
      sum = sum + 5 * i;
    }
  }
  return sum;
}

console.time();
console.log(bruteForceSolution(1000));
console.timeEnd();

console.time();
console.log(solution1(1000));
console.timeEnd();
