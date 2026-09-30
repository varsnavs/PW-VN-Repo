const   browserVersion="Chrome";

function getBrowserVersion() {

    if (browserVersion == "Chrome")
    {
        let browerVersion = "Edge"
        console.log("Browser version inside the block", browerVersion)
    }
      console.log("Browser version outside the block but instide the function", browserVersion)
}

getBrowserVersion();
console.log("Browser version outside the function", browserVersion)
