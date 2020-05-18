
const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, 'data/maps/oval.01.map');
const file = fs.readFileSync(filename).toString().split("\n");
const labyrinth = [];
let posNumberOne = [];
let posNumberTwo = [];

let nbLines = 0

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

for (const line of file) {

  if (nbLines != 0) {
    let lineWithoutSpace;
    if (line.indexOf("1") != -1) posNumberOne.push(line.indexOf("1"));
    if (line.indexOf("2") != -1) posNumberTwo.push(line.indexOf("2"));

    if(line.indexOf(" ") > 1 && line.indexOf("1") == -1) {
      if(line.substring(posNumberOne[0],posNumberOne[0] + 1) == " ") {
        lineWithoutSpace = line.replaceAt(posNumberOne[0], "+");
        labyrinth.push(lineWithoutSpace);
      } else {
        lineWithoutSpace = line.replace(/\s/g, "+");
        labyrinth.push(lineWithoutSpace);
      }
    } else {
        labyrinth.push(line);
      }
  }
  nbLines++
}

console.log(labyrinth);
