//const sayHello  = function () {
 // console.log("Hello, world");
//}

//sayHello();

const sayHello = function(name) {
  console.log("Hello, " +name);
}
sayHello("Taylor")

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);