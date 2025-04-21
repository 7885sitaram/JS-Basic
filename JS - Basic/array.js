// Sample array
const numbers = [10, 20, 30, 40, 50];

// Calculate Sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Calculate Average
let average = sum / numbers.length;

// Find Maximum
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// Find Minimum
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

// Output results
console.log("Array:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Maximum:", max);
console.log("Minimum:", min);
