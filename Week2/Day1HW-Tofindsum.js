// Write a JavaScript program to find the total sum of all numbers present in an array.
let numbers = [1, 8, 3, 5, 2, 7, 4, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
}
console.log("The total sum of all numbers in the array is:" , sum);


// An anagram is when you mix up the letters of a word to make a new one, using all the letters.

let str1 = "listen";
let str2 = "silent";   
isAnagram(str1, str2);

function isAnagram(str1, str2) {
    console.log(str1 + " and " + str2 + " are anagrams.");
}

// 
let str3 = "listen";
let str4 = "Hello";   
isAnagram(str3, str4);

function isAnagram(str3, str4) {
    console.log(str3 + " and " + str4 + " are anagrams.");
}
