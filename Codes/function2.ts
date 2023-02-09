import readline = require('readline-sync');

function checkEvenOdd(num: number): void {
  if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is an odd number.`);
  }
}

const inputNumber = parseInt(readline.question("Enter a number: "));
checkEvenOdd(inputNumber);