// Given arrays to test
let Array1 = [7, 5, 6, 1, 4, 2],
  Array2 = [5, 3, 1, 2];
// Test array of 25,000 numbers for performance testing
let length = 100000;
let Array3 = Array.from({ length }, (_, i) => i + 1);
// Random missing number to be popped from the array
let missingIndex = Math.floor(Math.random() * Array3.length);
// We take away from the test array
Array3.splice(missingIndex, 1);

// findMissing(arr) method is where the solution resides
findMissing = (arr) => {
  // n = the maximum number of integers in the array + 1
  // We assume there is a missing number so the array
  // should be 1 int short
  let n = arr.length + 1;
  // We get the sum from the provided formula
  let sum = (n * (n + 1)) / 2;
  // minus theoretical sum with the total sum of
  // all numbers in the array
  // Using Array.prototype.reduce seems to be faster
  sum -= arr.reduce((a, b) => a + b, 0);
  // The amount left behind is the missing number!
  return sum;
};

// We test if it works and display the results
console.log(`Array 1 missing number\t: ${findMissing(Array1)}`);
console.log(`Array 2 missing number\t: ${findMissing(Array2)}`);

// Performance testing ------------------------------------------------------------------
console.log(`\nTest for array length ${Array3.length + 1}`);
var startTime = performance.now();
console.log(`Array 3 missing number\t: ${findMissing(Array3)}`);
var endTime = performance.now();
console.log(
  `Actual missing number\t: ${missingIndex + 1}\nCall to doSomething took ${(
    endTime - startTime
  ).toFixed(3)} milliseconds`
);
