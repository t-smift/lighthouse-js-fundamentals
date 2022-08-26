
/* function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
function buildTriangle(length){
  var triangle = "";
  var lineNumber = 1;
  for (lineNumber = 1; lineNumber <= length; lineNumber++){
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10))
*/

var catSays = function(max, noise) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += noise;
    console.log(catMessage)
  }
  return catMessage;
};
console.log("Hello")
console.log(catSays(3, "bark "))


