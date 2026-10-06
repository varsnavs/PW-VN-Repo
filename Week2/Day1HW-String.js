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

function isAnagram(str1, str2) {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}
    console.log("The two strings are anagrams:", isAnagram(str1, str2));


    //Split the string into an array of words.
    // Find the last word in the array.
    // Calculate the length of this word.


    let sentence = "I am learning JavaScript";
    let words = sentence.split(" ");
    console.log("The array of words is:", words);
    let lastWord = words[words.length - 1];
    console.log("The last word in the array is:", lastWord);
    console.log("The length of the last word is:", lastWord.length);

    // Remove spaces and convert all letters to the same case
// Sort the Characters
// comapare the sorted strings
// retrun the result

let str5 = "Hello beautiful World";
let sortedStr5 = str5.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
console.log("The sorted string is:", sortedStr5);
