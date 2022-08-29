function calculateRectangleArea(length, width){
  let recArea = length * width
  if (recArea <= 0){
    return "undefined"
  }
  return recArea
} 

console.log(calculateRectangleArea(-14,5))

function calculateTriangleArea(base, height){
  let triArea = base * height / 2
  if (base <= 0 || height <= 0){
    return "undefined"
  }
  return triArea
}


function calculateCircleArea(radius){
  let circArea = radius * radius * Math.PI
  if (radius <= 0){
    return "undefined"
  }
  return circArea
}

