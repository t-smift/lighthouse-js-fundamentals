const instructorWithLongestName = function(instructors) {
  let longestName = ""
  for (x = 0; x < instructors.length; x++){
    let y = instructors[x].name
    if (y.length > longestName.length){
      longestName = y;
    }
  } 
  return longestName;
}
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));