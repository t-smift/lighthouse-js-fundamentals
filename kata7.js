function checkAir(samples, threshold){
  let cleanSamples = []
  let dirtySamples = []
  for (sample of samples){
    if (sample === 'clean'){
      cleanSamples.push(sample)
    }
    else if (sample === 'dirty'){
      dirtySamples.push(sample)
    }
  } 
  let pollutionRate = dirtySamples.length / samples.length
  if (pollutionRate >= threshold){
    return "Polluted"
  }
  else return "Clean"
}
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));
console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))