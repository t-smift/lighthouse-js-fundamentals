function doesMyCarFit(spotType, carType){
  carType = carType[0];
  if (carType === "r"){
    if (spotType === "r"){
      return true;
    } else return false;
  }  
  else if (carType === "s"){
    if (spotType === "s" || spotType === "r"){
      return true;
    } else return false;
  }
  else if (spotType === "r" || spotType === "s" || spotType === "m"){
    return true;
  } 
  else return false;
}
function whereCanIPark(spots, type){
  allSpots = []
  for (x = 0; x < spots.length; x++){
    for (y = 0; y < spots[x].length; y++){
      var currentSpot = spots[x][y]
      if (doesMyCarFit(currentSpot, type)){
        allSpots.push([x,y])
      }
      


    } 
  } return allSpots
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))