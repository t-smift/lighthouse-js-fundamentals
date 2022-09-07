function ingredientCheck(bakery, recipe){
  for (x = 0; x < bakery.length; x++){
    let goods = bakery[x];
    for (y = 0; y < recipe.ingredients.length; y++){
      let goodsNeeded = recipe.ingredients[y];
      if (goods === goodsNeeded){
        return true
      }
    }
  } return false
}
function chooseRecipe(bakeryA, bakeryB, recipes){
  for (recipe of recipes){
    if (ingredientCheck(bakeryA, recipe) && ingredientCheck(bakeryB, recipe)){
      return recipe.name;
    }
  }
}
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));