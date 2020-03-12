const fs = require("fs");

fs.promises.readFile("package.json", { encoding: "UTF-8" })
  .then((content) => fs.promises.writeFile("package.json.copy", content))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log("Error during copy"));
