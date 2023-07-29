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

function solution2(number) {
  let sum=0
  let i=1;
  while(true){
      let num1 = 3*i;
      let num2 = 5*i;
      
      if(num1>=number){num1=0}
      if(num2>=number){num2=0}
      
      if(num1==0 && num2==0)
      {break;}
      
      if(num2%3!==0){
          sum = sum+num1+num2;
      }
      else{
          sum=sum+num1;
      }
      i++;
  }
  return sum;
}

function sumOfmultiples(number,toBeDividedBy)
{
  let possibleMultiples = Math.floor((number-1)/toBeDividedBy);
  return toBeDividedBy * ((possibleMultiples*(possibleMultiples+1))/2)
}

function solution3(number) {
  return sumOfmultiples(number,3) + sumOfmultiples(number,5)-sumOfmultiples(number,15);
}

console.time();
console.log(bruteForceSolution(1000));
console.timeEnd();

console.time();
console.log(solution1(1000));
console.timeEnd();

console.time();
console.log(solution2(1000));
console.timeEnd();

console.time();
console.log(solution3(1000));
console.timeEnd();
