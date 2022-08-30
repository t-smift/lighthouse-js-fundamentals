const array1 = [ 3, 2, 1 ]
const array2 = [ 4, 5, 6 ]

function concat(array1, array2){
  for (let x = 0; x < array2.length; x++){
    array1.push(array2[x])   
  } return array1.sort()
} 

console.log(concat(array1, array2))
