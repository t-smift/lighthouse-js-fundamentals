function repeatNumbers(data){
  let result = ""
  for (y = 0; y < data.length; y++){
    let pair = data[y]
    for (x = 0; x < pair[1]; x++){
      result = result.concat(pair[0])
    } 
    if (y < data.length - 1){
      result = result + ", "
    }
  } 
  return result
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));