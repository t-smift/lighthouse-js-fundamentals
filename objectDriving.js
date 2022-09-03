const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
function carPassing(cars, speed){
  let newDate = Date.now(speed);
  let newObject = {};
  newObject.time = newDate;
  newObject.speed = speed;
  cars.push(newObject);
  return cars
}
