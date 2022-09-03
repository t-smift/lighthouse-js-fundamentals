function numberOfVowels(string){
  let sum = 0;
  for (x = 0; x <= string.length; x++){
    let l = string[x]
    if (l === 'a' || l === 'e' || l ===  'i' || l === 'o' || l === 'u'){
      sum = sum + 1;
    }
  } return sum
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
