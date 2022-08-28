function howManyHundreds(num){
  let x = num % 100
  if (x === 0){
    return num / 100
  } else if (x !==0){
    return (num - x)/100
  }
}
console.log(howManyHundreds(57))