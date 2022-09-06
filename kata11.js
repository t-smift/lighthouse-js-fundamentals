const PI = 3.14159
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
function sphereVolume(radius){
  return (4 / 3) * PI * radius * radius * radius
}
function coneVolume(radius, height){
  return PI * radius * radius * (height / 3)
}
function prismVolume(height, width, depth){
  return height * width * depth
}
function totalVolume(solids){
  let total = 0
  for (solid of solids) {
    if (solid.type === "sphere"){
      total += sphereVolume(solid.radius);
    }
    else if (solid.type === "cone"){
      total += coneVolume(solid.radius, solid.height);
    }
    else if (solid.type === "prism"){
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total
}
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);