// Factorial: Write a function to calculate the factorial of a given number

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// let numbers = [8, 10, 3, 1, 9, 6];
// numbers.forEach(num => {
//     console.log(`Factorial of ${num}: ${factorial(num)}`);
// });


// Prime Number Check: Create a function to check if a number is prime or not.

// function isPrime(num) {
   
//     if (num <= 1) {
//         return false;
//     }

//     if (num <= 3) {
//         return true;
//     }

//     if (num % 2 === 0 || num % 3 === 0) {
//         return false;
//     }

//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) {
//             return false;
//         }
//         i += 6;
//     }

//     return true;
// }

// let numbers = [201, 43, 81, 92, 87];
// numbers.forEach(num => {
//     let result = isPrime(num) ? "Prime" : "Not Prime";
//     console.log(`${num} is ${result}`);
// });


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

// function fibonacciSequence(numTerms) {
//     let fibArray = [0, 1];

//     for (let i = 2; i < numTerms; i++) {
//         fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
//     }

//     return fibArray.slice(0, numTerms);
// }
// let terms = 10;
// let fibonacciSequenceResult = fibonacciSequence(terms);
// console.log(`Fibonacci sequence (${terms} terms):`, fibonacciSequenceResult);
