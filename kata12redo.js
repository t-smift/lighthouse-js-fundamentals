function ingredientCheck(bakery, recipes){
  let posRecipes = []
  for (recipe of recipes){
    for (x = 0; x < recipe.ingredients.length; x++){
      let goodsNeeded = recipe.ingredients[x];
      for (goods of bakery){
        if (goods === goodsNeeded){
          posRecipes.push(recipe.name)
        }
      }
    } 
  } return posRecipes
} 
function chooseRecipe(bakeryA, bakeryB, recipes){
  let bakeryArecipes = ingredientCheck(bakeryA, recipes);
  let bakeryBrecipes = ingredientCheck(bakeryB, recipes);
  for (a of bakeryArecipes){
    for (b of bakeryBrecipes){
      if (a === b){
        return a
      }
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