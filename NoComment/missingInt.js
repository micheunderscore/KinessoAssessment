let Array1 = [7, 5, 6, 1, 4, 2],
  Array2 = [5, 3, 1, 2];

findMissing = (arr) => {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  sum -= arr.reduce((a, b) => a + b, 0);
  return sum;
};

console.log(`Array 1 missing number\t: ${findMissing(Array1)}`);
console.log(`Array 2 missing number\t: ${findMissing(Array2)}`);

// Performance testing ------------------------------------------------------------------
let length = 100000;
let Array3 = Array.from({ length }, (_, i) => i + 1);
let missingIndex = Math.floor(Math.random() * Array3.length);

Array3.splice(missingIndex, 1);

console.log(`\nTest for array length ${Array3.length + 1}`);
var startTime = performance.now();
console.log(`Array 3 missing number\t: ${findMissing(Array3)}`);
var endTime = performance.now();
console.log(
  `Actual missing number\t: ${missingIndex + 1}\nCall to doSomething took ${(
    endTime - startTime
  ).toFixed(3)} milliseconds`
);
