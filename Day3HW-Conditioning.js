function launchBrowser() {
    let browserName = "firefox";
    if (browserName == "chrome")
        console.log("Chrome browser is launched");
    else if (browserName == "firefox")
        console.log("Firefox browser is launched"); }

    launchBrowser();

// Swicth case statement to check the test framework. If the test framework is TestNG, print "TestNG is running". If the test framework is JUnit, print "JUnit is running". If no test framework is running, print "No test framework is running".

     function runTests() {

     let testype = "Smoke";
     switch (testype) {
         case "Smoke":
             console.log("Smoke tests are running");
             break;
         case "Sanity":
             console.log("Sanity tests are running");
             break;
         case "Regression":
             console.log("Regression tests are running");
             break;
         default:
             console.log("Smoke tests");   }
     }

             runTests();
    