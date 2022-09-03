const sumTheNumbers = function(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
          sum = sum + array[i];
      }
  return sum;
}

const conditionalSum = function(values, condition) {
  const even = [];
  const odd = [];
  if (values && values.length) {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        even.push(values[i]);
        } else { 
        odd.push(values[i]);
        }
      }
      if (condition === 'even') {
        return sumTheNumbers(even);
      } else if (condition === 'odd') {
        return sumTheNumbers(odd);
      } else return 0
  } else return 0
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "ketchup"));