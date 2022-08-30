const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let x = 0
while (x < ingredients.length){
  console.log(ingredients[x])
  x++
}

for (let x = 0; x < ingredients.length; x++){
  console.log(ingredients[x])
}

for (let x = 0; x < ingredients.length; x++){
  console.log(ingredients[x]);
  let revingredients = ingredients.reverse()
  console.log(revingredients)
}
