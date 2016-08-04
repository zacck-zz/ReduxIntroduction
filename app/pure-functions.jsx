var redux = require('redux');


console.log('starting redux');

//pure function
function add(a, b) {
  return a+b;
}


//impure function

var a = 3;
function add(b) {
  return a+b;
}

var result;
function add(a,b) {
  result = a+b;
  return result;
}

function add(a,b) {
  return a + b + new Date().getSeconds();
}

function changeProp(obj) {
  //use es6
  return {
    ...obj,
    name:'Jen'
  }
}

var startingValue = {
  name:'Zacck',
  age: '26'
};
var res = changeProp(startingValue);

console.log('starting value ', startingValue);
console.log('result value', res);
