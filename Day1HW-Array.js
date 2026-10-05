// Write the JS program to print duplicates in an array.

let num=[56,78,90,23,90,76,43,56]

 for(i=0;i<num.length;i++){
for(j=i+1;j<num.length;j++){
    if(num[i]==num[j]){
        console.log("The duplicate numbers in the array are:" , num[j]);
    }
}
 }

//  Push the elements of the array into a new array and print the new array.

let arr=[12,34,56,78,90]
console.log("The original array is:" , arr)
console.log("The new array is:" , arr.push(100,200,))  
console.log("The new array after pushing the elements is:" , arr)

let arr1=["Playwright", "Selenium", "Cypress"]
console.log("The new array is:" , arr1.push("TestNG", "JUnit"))
console.log("The new array after pushing the elements is:" , arr1)

// Pop()    
console.log("The element removed from the array is:" , arr1.pop())
console.log("The array after popping an element is:" , arr1)

// reverse()
console.log("The array after reversing the elements is:" , arr1.reverse())

//Shift()
console.log("The element removed from the array is:" , arr1.shift())
console.log("The array after shifting an element is:" , arr1)

// Unshift()
console.log("The new array is:" , arr1.unshift("Cucumber"))
console.log("The array after unshifting an element is:" , arr1)

// includes
console.log("The array includes the element 'Selenium':" , arr1.includes("Selenium"))

// indexOf()
let arr2=["Playwright", "Selenium", "Cypress"]
console.log("The index of the element 'Cypress' in the array is:" , arr2.indexOf("Cypress"))

// join()
let arr3=["Playwright", "Selenium", "Cypress"]
console.log("The array after joining the elements is:" , arr3.join(" - "))

// sort() 
let arr4=[78,90,23,76,43,56]
console.log("The array after sorting the elements is:" , arr4.sort())


