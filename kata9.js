function camelCase(input){
  let camelString = ""
  let splitArray = input.split(" ")
  let newArray = [splitArray[0]]
  for (x = 1; x < splitArray.length; x++) {
    let each = splitArray[x];
    each = each[0].toUpperCase() + each.substring(1);
    newArray.push(each);
  }
  camelString = newArray.join("")
  return camelString;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
