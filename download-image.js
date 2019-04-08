var request = require("request");
var fs = require("fs");
var sysPath =
  process.cwd().toString() + "/w2d1/HTTPRequestClient/downloads/future.jpg";

request
  .get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function(err) {
    console.log("There was an error: " + err);
  })
  .on("response", function(response) {
    console.log("Downloading image...");
    console.log("Response Status Code: ", response.statusCode);
    console.log("Response Status MEssage: ", response.statusMessage);
    console.log("Download complete.");
  })
  .pipe(fs.createWriteStream(sysPath)); // Note 4
