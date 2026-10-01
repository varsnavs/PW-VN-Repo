// const   browserVersion="Chrome";

// function getBrowserVersion() {

    // if (browserVersion == "Chrome")
    // {
        // let browerVersion = "Edge"
        // console.log("Browser version inside the block", browerVersion)
    // }
    //   console.log("Browser version outside the block but instide the function", browserVersion)
// }

// getBrowserVersion();
// console.log("Browser version outside the function", browserVersion)

// Gender type = Female and details like color and age are defined inside the function. Color is defined inside the if block and age is defined inside the function but outside the if block. Print the values of color and age inside the if block and outside the if block but inside the function. Print the value of gender type outside the function.

const genderType = "male"
function printGenderType() {
    let color = "brown"
    if (genderType == "male") {
        var age = 30
        let name = "Varsha"
        let color = "blue" 
        console.log("Color:", color) 
        console.log("Name:", name)
    }
        console.log("Age:", age)
        console.log("Color:", color)
    }

    printGenderType();

    console.log("Gender type:", genderType)
    
