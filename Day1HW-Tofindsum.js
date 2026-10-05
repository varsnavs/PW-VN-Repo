// Write a JavaScript program to find the total sum of all numbers present in an array.
let numbers = [1, 8, 3, 5, 2, 7, 4, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
}
console.log("The total sum of all numbers in the array is:" , sum);
