const urlEncode = function(text) {
  let newString = "";
  for (x = 0; x < text.length; x++){
    let y  = text[x];
    if (y === " "){
      newString = newString.concat("%20");
    } 
    else newString = newString.concat(y);
  } 
  return newString
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));