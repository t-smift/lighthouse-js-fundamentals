
function finalPositions(moves){
  let x = 0;
  let y = 0;
  for (const move of moves){
    if (move === "north"){
      y = y + 1;
    } else if (move === "south"){
      y = y - 1;
    } else if (move === "west"){
      x = x - 1;
    } else if (move === "east"){
      x = x + 1;
    }
  } return [x, y];
}
let moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
console.log(finalPositions(moves));
