const fs = require("fs");

// Callback Hell
fs.readFile("package.json", { encoding: "UTF-8" }, (err, content) => {
  if (err) {
    console.log("Error during copy");
  } else {
    fs.writeFile("package.json.copy", content, (err) => {
      if (err) {
        console.log("Error during copy");
      } else {
        console.log("Copy done");
      }
    });
  }
});
