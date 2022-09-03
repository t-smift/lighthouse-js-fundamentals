const sumLargestNumbers = function(data){
  let largest = data[0];
  let secondLargest = "";
  for (x = 1; x < data.length; x++){
    if (data[x] >  largest){
      secondLargest = largest;
      largest = data[x];
    }
  } return largest + secondLargest;
}
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));