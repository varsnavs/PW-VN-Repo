// let str = "Testleaf";
// let output = "";
// for (let i = str.length - 1; i >= 0; i--) {
    //  output += str[i];
    // if(output.length === str.length) {
        // console.log(output);
    // }
// }

// 

// isOddOrEven

function isOddOrEven(num) {
    if (num % 2 === 0) {
        console.log(num, "is an even number");
    } else {
        console.log(num, "is an odd number");
    }
}
    isOddOrEven(301);


    // funtion - Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
// corresponding string indicating the type.

function checkNumberType(num) {
    if (num > 0) {
        // return num + " is a positive number";
        console.log(num + " is a positive number");
    } else if (num < 0) {
        // return num + " is a negative number";
        console.log(num + " is a negative number");
    } else {
        // return num + " is zero";
        console.log(num + " is neutral");
    }
}

checkNumberType(0);



// Print the square of each number from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log("The Square of " + i + " is " + (i * i));
}