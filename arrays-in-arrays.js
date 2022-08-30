var grid = [
  [1, 2, 3, 4, 5],
  [6, 7 ,8, 9 ,10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
]
for (var r = 0; r < grid.length; r++) {
  for (var c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}
// this is a loop inside a loop
// the reason r and c are purely "less than" the array.length is because the array length counts from 1, but the 
// index starts at 0. The 'length' of the array is always 1 more than the final index.
// the first loop will iterate accross the 4 arrays, since each array is a separate item at level 1
// the second loop will iterate accross each item in an array, think of it as level 2
// together they will iterate accross each item in each array
