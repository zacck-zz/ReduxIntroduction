//pure functions
function add(a,b) {
  return a + b;
}

//impure function
var d = 9;
function impadd(c , d ) {
  return c + d;
}


var result;
function add(c,d) {
  result = c + d;
  return result;
}

function add(a,b) {
  return a + b + new Date().getSeconds();
}


function changeProp(obj) {
  return{
    ...obj,
    name: 'Jen'
  };
}

var startingValue = {
  name: 'Zacck',
  age: 26
}
var res = changeProp(startingValue);
console.log(startingValue);

console.log(res);
