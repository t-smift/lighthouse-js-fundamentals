function lastIndexOf(array, value){
  for (var x = array.length - 1; x >= 0; x--){
    if (array[x] === value){
      return x
      break
    } 
  } return -1
}  
test = [ 0, 1, 4, 1, 2 ]
console.log(lastIndexOf(test, 7))