//⦁	Create a node.js program reads the content from a file named input.txt and write it to another file output.txt

const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (!err) fs.writeFile("output.txt", data, () => {});
});
