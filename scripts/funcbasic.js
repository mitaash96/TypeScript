// Palindrome Checker: Create a function that takes a string as input and returns true if it is a palindrome.
export const isPalindrome = (s) => s.split("").reverse().join("") === s;
// Prime Number Checker: Write a function that takes a number as input and returns true if it is a prime number, and false otherwise.
export const isPrime = (n) => {
    for (var i = 1; i < n / 2; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
};
export const fizzBuzz = (n) => {
    var arr = Array.from(Array(n).keys()).map(x => x + 1);
    var arr1 = arr.map(x => (x % 3 > 0 || x % 5 > 0) ? x.toString() : (x % 15 === 0 ? "FizzBuzz" : (x % 3 === 0 ? "Fizz" : "Buzz")));
    return arr1;
};
/*
FizzBuzz: Write a program that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

Fibonacci Sequence: Generate the Fibonacci sequence up to a given number n and store the sequence in an array.

Array Manipulation: Implement various array manipulation functions such as finding the maximum or minimum value in an array, reversing the array, removing duplicates, or sorting the array.

Object Manipulation: Create functions to perform operations on JavaScript objects, such as merging objects, checking for the presence of a specific property, or converting objects to arrays.

Random Quote Generator: Create a program that displays a random quote from an array of quotes each time it is run.
*/ 
//# sourceMappingURL=funcbasic.js.map